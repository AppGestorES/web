"use client";

import Link from "next/link";
import { Button } from "../button";

const TryItNow = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 py-8">
      <h2 className="text-6xl font-bold text-center">
        A Que Estas <br />
        Esperando
      </h2>
      <p className="text-neutral-500">Pruebalo ahora</p>
      <Button>
        <Link href={"/login"}>Comenzar</Link>
      </Button>
    </div>
  );
};

export default TryItNow;
