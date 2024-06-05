import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { inter } from "./fonts";
import Header from "@/components/ui/index/header";
import Footer from "@/components/ui/index/footer";

export const metadata: Metadata = {
  title: "App Gestor",
  description:
    "Gestor: Tu Portal hacia la Productividad, la Organización Eficaz y el Éxito Sin Esfuerzo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
