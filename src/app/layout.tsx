import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant({
  variable: "--font-heading-var",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nomad's Nest",
    default: "Nomad's Nest — Ayia Napa, Cyprus",
  },
  description: "A thoughtfully designed apartment 10 minutes from the city centre and 20 minutes from the beach.",
  openGraph: {
    images: ["/images/logo-nn-gold-crop.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('nn-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='light'?'light':t==='dark'?'dark':d?'dark':'light';document.documentElement.setAttribute('data-theme',r);})();` }} />
      </head>
      <body className={`${raleway.variable} ${cormorant.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
