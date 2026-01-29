import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Seu Nome | Portfólio",
  description: "Portfólio profissional",
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