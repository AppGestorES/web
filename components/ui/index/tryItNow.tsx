"use client";

import Link from "next/link";
import { Button } from "../button";
import { sendGTMEvent } from "@next/third-parties/google";

const TryItNow = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 py-16">
      <h2 className="text-6xl font-bold text-center">
        ¿A Qué Estás <br />
        Esperando?
      </h2>
      <p className="text-neutral-500">Pruébalo ahora</p>
      <Button
        className="mt-8"
        onClick={() => {
          sendGTMEvent({ event: "login", value: "true" });
        }}
      >
        <Link href={"/login"}>Comenzar</Link>
      </Button>
    </div>
  );
};

export default TryItNow;
