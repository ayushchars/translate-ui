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

export const metadata = {
  title: "Communiq ",
  description: "Communiq helps you translate text in any language, chat intelligently, and get email assistance with AI-powered suggestions.",
  keywords: "translation, AI chat, email assistance, multilingual support, Communiq",
  author: "Ayush Chaurasia",
  robots: "index, follow",
  canonical: "https://communiq-translate.vercel.app/",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={metadata.robots} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
