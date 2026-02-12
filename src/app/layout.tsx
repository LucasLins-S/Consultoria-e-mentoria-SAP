import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
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
				<link rel="icon" href="/lucas-lins-logo.png" type="image/svg+xml"></link>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
