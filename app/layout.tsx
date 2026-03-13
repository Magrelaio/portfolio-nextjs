import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Caio Cesar | Portfólio",
  description: "Desenvolvedor Full Stack. Apaixonado por tecnologia e inovação. Bem-vindo ao meu portfólio!",
  keywords: "portfólio, desenvolvedor full stack, tecnologia, inovação, fullstack developer, experiência, programador, desenvolvedor",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark text-light antialiased">
        {children}
      </body>
    </html>
  );
}