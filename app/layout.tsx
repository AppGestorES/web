import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { inter } from "./fonts";
import Header from "@/components/ui/index/header";
import Footer from "@/components/ui/index/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "App Gestor",
  description:
    "AppGestor: Tu Portal hacia la Productividad, la Organización Eficaz y el Éxito Sin Esfuerzo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="tagManager"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TDTH9WC9');
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          id="analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FJ3DZJC44H"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJ3DZJC44H');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDTH9WC9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
