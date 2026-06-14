import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gemma Automations | Inteligência que transforma negócios",
  description:
    "Automação, agentes de IA, chatbots e soluções inteligentes para sua empresa crescer com eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
