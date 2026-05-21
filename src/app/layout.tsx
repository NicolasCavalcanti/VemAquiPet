import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaMobile from "@/components/StickyCtaMobile";
import { SchemaOrg } from "@/components/SchemaOrg";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vemaquipet.com.br"),
  icons: {
    icon: "/Favicon.jpg",
    shortcut: "/Favicon.jpg",
    apple: "/Favicon.jpg",
  },
  title: {
    template: "%s | Vem Aqui Pet",
    default: "Vem Aqui Pet: portal pet da Granja Viana, Cotia e região",
  },
  description:
    "Conteúdos confiáveis, guias locais, serviços em domicílio, vida ativa e soluções para tutores de pets da Granja Viana, Cotia e região.",
  keywords: [
    "pet Granja Viana",
    "veterinário em casa",
    "saúde pet",
    "cuidados com cachorro",
    "guia local pet",
    "Cotia pet",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vemaquipet.com.br",
    siteName: "Vem Aqui Pet",
    title: "Vem Aqui Pet: portal pet da Granja Viana, Cotia e região",
    description:
      "Conteúdos confiáveis, guias locais, serviços em domicílio e soluções para tutores.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vem Aqui Pet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vem Aqui Pet",
    description: "Portal pet da Granja Viana, Cotia e região.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF7EA] text-[#243C4A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCtaMobile />
      </body>
    </html>
  );
}
