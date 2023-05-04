import BgImage, { BgShadow } from "@/components/elements/BgImage";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <BgImage url="/img/banner-bg.webp">
      <BgShadow>
        <h1 className="flex gap-4 font-title text-5xl tracking-wider max-sm:flex-col sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <span className="text-[#2ba600]">Pizzaria</span>
          <span className="text-white">d'</span>
          <span className="text-[#ff0000]">Donna</span>
        </h1>
        <Image
          className="absolute -bottom-20 -left-1"
          src={"/img/decorative/plant.svg"}
          alt="folha"
          width={80}
          height={80}
        ></Image>
      </BgShadow>
    </BgImage>
  );
}
