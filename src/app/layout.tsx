import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-grotesk",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#ccff00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sandrolima.com"),
  title: {
    default: "Sandro Lima | Tráfego Pago & Performance de Alta Escala",
    template: "%s | Sandro Lima"
  },
  description: "Especialista em Tráfego Pago e Gestão de Performance. Escalamos negócios através de estratégias precisas no Google Ads e Meta Ads. Solicite seu diagnóstico grátis.",
  keywords: ["Tráfego Pago", "Gestão de Tráfego", "Performance", "Google Ads", "Meta Ads", "Sandro Lima", "Escala de Negócios", "Marketing Digital"],
  authors: [{ name: "Sandro Lima" }],
  creator: "Sandro Lima",
  publisher: "Sandro Lima",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sandrolima.com",
    title: "Sandro Lima | Tráfego Pago & Performance",
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
    title: "Sandro Lima | Tráfego Pago & Performance",
    description: "Escalando Negócios com Tráfego Pago de Alta Performance.",
    images: ["/images/perfil.png"],
  },
  icons: {
    icon: [
      { url: "/images/perfil.png" },
      { url: "/images/perfil.png", sizes: "32x32", type: "image/png" },
      { url: "/images/perfil.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/perfil.png",
    apple: [
      { url: "/images/perfil.png" },
      { url: "/images/perfil.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/perfil.png',
      },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Basta adicionar o suppressHydrationWarning abaixo */}
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased bg-[#111317] text-[#e2e2e8]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}