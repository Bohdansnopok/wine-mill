import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { RegisterModal } from "@/components/RegisterModal/RegisterModal";
import { LoginModal } from "@/components/LoginModal/LoginModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Винная мельница",
  description: "магазин елитных вин и виски",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <RegisterModal />
      <LoginModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
