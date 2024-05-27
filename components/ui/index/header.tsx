"use client";

import { Menu } from "lucide-react";
import HeaderLinks from "./headerLinks";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Header = () => {
  const mobileMenu = () => {
    document.querySelector(".menu")?.classList.toggle("!translate-x-0");
  };

  const enlaces = [
    { text: "Inicio", url: "/" },
    { text: "Sobre Nosotros", url: "/about" },
    { text: "Funciones", url: "/#features" },
    { text: "Contacto", url: "/contact" },
  ];

  const estilos =
    "gap-4 flex md:flex-row flex-col md:static absolute top-0 left-0 w-full md:w-auto bg-[#f5f5f5] mt-[70px] md:mt-0 items-center justify-center translate-x-[-100%] md:translate-x-0 menu transition-all p-4";

  return (
    <header className="w-full h-[75px] flex items-center justify-between md:justify-center gap-10 px-4 relative bg-[#f5f5f5]">
      <Link href={"/"}>
        <Logo estilos="text-2xl font-bold" />
      </Link>
      <HeaderLinks links={enlaces} estilos={estilos} />
      <Button className=" hidden md:block">
        <Link href={"/register"}> Empezar</Link>
      </Button>
      <Button className="block md:hidden bg-[] hover:bg-[none]" onClick={mobileMenu}>
        <Menu className="text-black" />
      </Button>
    </header>
  );
};

export default Header;
