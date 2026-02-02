import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Tian Ye",
  description: "A personal portfolio website of Tian Ye, a programmer at Tencent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* 把 pixel.variable 加入到 className 中 */}
      <body className={`${inter.variable} ${mono.variable} ${pixel.variable} font-sans bg-black text-zinc-400 antialiased`}>
        {children}
      </body>
    </html>
  );
}