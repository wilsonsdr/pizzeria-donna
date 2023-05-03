import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header
      className="h-[500px] bg-cover bg-center bg-no-repeat object-cover"
      style={{
        backgroundImage: `url('/img/banner-bg.webp')`,
      }}
    >
      <div className="h-full w-full bg-[rgba(0,0,0,0.8)]">
        <div className="relative h-full w-full">
          <h1 className="flex h-full w-full flex-wrap items-center justify-center gap-4 font-title text-5xl tracking-wider max-sm:flex-col sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
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
        </div>
      </div>
    </header>
  );
}
