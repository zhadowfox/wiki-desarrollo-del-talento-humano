import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wiki - Desarrollo del talento humano en organizaciones saludables",
  description: "Desarrollo del talento humano en organizaciones saludablesp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
         <Navbar />
        <main>
       
       
        {children}
       
     

        
        </main>

      </body>
    </html>
  );
}
