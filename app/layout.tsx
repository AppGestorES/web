import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { inter } from "./fonts";
import Header from "@/components/ui/index/header";
import Footer from "@/components/ui/index/footer";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "App Gestor",
  description:
    "AppGestor: Tu Portal hacia la Productividad, la Organización Eficaz y el Éxito Sin Esfuerzo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-TDTH9WC9" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
