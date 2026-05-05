import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  service?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("ERRO CRÍTICO: RESEND_API_KEY não encontrada!");
      return NextResponse.json({ error: "Erro de configuração." }, { status: 500 });
    }

    const body = (await request.json()) as ContactPayload;
    const { name, company, email, phone, subject, service, message } = body;

    // Usando fetch nativo no lugar da SDK do Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Lucas Lins <contato@lucas-lins.com>',
        to: ['contato@lucas-lins.com'],
        subject: `Novo Contato Site: ${subject} - ${name}`,
        reply_to: email, // Na API direta, o parâmetro é reply_to (com underline)
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9fafb;">
            <h2 style="color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">Novo contato recebido</h2>
            
            <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; margin-bottom: 16px;">
              <p style="margin: 8px 0;"><strong>👤 Nome:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>🏢 Empresa:</strong> ${company || 'Não informado'}</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>📱 Telefone:</strong> ${phone || 'Não informado'}</p>
              <p style="margin: 8px 0;"><strong>📌 Assunto:</strong> ${subject}</p>
              <p style="margin: 8px 0;"><strong>⚙️ Serviço:</strong> ${service || 'Não especificado'}</p>
            </div>

            <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; margin-bottom: 12px; color: #374151; font-size: 16px;">💬 Mensagem:</h3>
              <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${message}</p>
            </div>
            
            <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px;">
              Este email foi enviado automaticamente através do formulário do site.
            </p>
          </div>
        `
      })
    });

    if (!resendResponse.ok) {
      const errorData = (await resendResponse.json()) as { message?: string };
      console.error("Falha na API do Resend:", errorData);
      throw new Error(errorData.message || "Erro ao enviar email pelo Resend");
    }

    const data = await resendResponse.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Erro no Catch:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}