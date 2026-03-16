import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nomad's Nest",
    default: "Nomad's Nest",
  },
  description: "Your home away from home in Ayia Napa, Cyprus. Stylish short-term rental with everything you need for an unforgettable stay.",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
