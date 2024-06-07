"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero_image from "@/public/hero_image.svg";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";

const Hero = () => {
  return (
    <div className="w-1/2 max-h-[585px] min-h-[322px] h-full gap-4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center md:text-left gap-4 max-w-[500px]">
        <Logo estilos="text-[60px] font-bold md:w-full" />
        <p className="text-center md:text-left text-[#6D7280]">
          Gestor: Tu Portal hacia la Productividad, la Organización Eficaz y el Éxito Sin Esfuerzo
        </p>
        <div className="md:w-full flex gap-4">
          <Button
            onClick={() => {
              sendGTMEvent({ event: "Get Started", value: "True" });
            }}
          >
            <Link href={"/register"}>Comenzar</Link>
          </Button>
          <Button
            className=" hidden md:inline-flex"
            variant={"secondary"}
            onClick={() => {
              sendGTMEvent({ event: "login", value: "true" });
            }}
          >
            <Link href={"/login"}>¿Ya tienes una cuenta?</Link>
          </Button>
        </div>
      </div>
      <Image src={hero_image} width={500} height={500} alt={""} className="hidden md:block" />
    </div>
  );
};

export default Hero;
