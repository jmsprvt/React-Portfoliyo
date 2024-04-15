import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://zhalolovmukhriddin.vercel.app/"
  ),
  title: "Portfolio",
  description: "Developer Portfolio",
  keywords: ["Developer", "Portfolio", "Fullstack", "Frontend", "Backend", "Developer Portflio", "Mukhriddin", "Mukhriddin Zhalolov"],
  openGraph: {
    title: "Zhalolov Mukhriddin",
    description: "Front-end Web Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
