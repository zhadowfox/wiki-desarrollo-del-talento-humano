import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar";




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
