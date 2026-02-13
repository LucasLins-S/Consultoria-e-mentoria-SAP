import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google"; // Importamos a Lato aqui
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Lucas Lins | Consultoria e Mentoria SAP',
  description: "Consultoria especializada em SAP, mentoria para desenvolvedores e soluções estratégicas para o ecossistema SAP. Transforme sua carreira e seus projetos.",
  keywords: ["SAP", "Consultoria SAP", "Mentoria SAP", "ABAP", "SAP S/4HANA", "Desenvolvimento SAP"],
  authors: [{ name: "Lucas Lins" }],
  creator: "Lucas Lins",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/lucas-lins-logo-blue.png" type="image/svg+xml"></link>
      </head>
      <body className={`${lato.variable} ${geistMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}