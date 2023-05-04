import BgImage, { BgShadow } from "@/components/elements/BgImage";
import { PX, PY } from "@/components/enum";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="relative footer mt-8 flex h-[500px] items-center justify-center bg-black px-8 text-center">
      <h1 className="flex gap-4 font-title text-5xl tracking-wider max-sm:flex-col sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <span className="text-[#2ba600]">Pizzaria</span>
        <span className="text-white">d'</span>
        <span className="text-[#ff0000]">Donna</span>
      </h1>
      <Image
        className="absolute -top-[40px] right-7"
        src={"/img/decorative/tomato.svg"}
        alt="folha"
        width={100}
        height={100}
      ></Image>
    </div>
  );
}
