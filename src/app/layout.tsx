import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "SANDRO LIMA | Tráfego Pago & Performance de Alta Escala",
  description: "Especialista em Tráfego Pago e Gestão de Performance. Escalamos negócios através de estratégias precisas no Google Ads e Meta Ads. Solicite seu diagnóstico grátis.",
  keywords: ["Tráfego Pago", "Gestão de Tráfego", "Performance", "Google Ads", "Meta Ads", "Sandro Lima", "Escala de Negócios", "Marketing Digital"],
  authors: [{ name: "Sandro Lima" }],
  creator: "Sandro Lima",
  publisher: "Sandro Lima",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sandrolima.com",
    title: "SANDRO LIMA | Tráfego Pago & Performance",
    description: "Transformamos dados brutos em lucro escalável através de mentorias estratégicas e gestão de tráfego.",
    siteName: "Sandro Lima Performance",
    images: [
      {
        url: "/images/perfil.png",
        width: 800,
        height: 800,
        alt: "Sandro Lima - Especialista em Tráfego Pago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SANDRO LIMA | Tráfego Pago & Performance",
    description: "Escalando Negócios com Tráfego Pago de Alta Performance.",
    images: ["/images/perfil.png"],
  },
  icons: {
    icon: "/images/perfil.png",
    shortcut: "/images/perfil.png",
    apple: "/images/perfil.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
