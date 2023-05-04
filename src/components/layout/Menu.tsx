import React, { use, useState } from "react";
import Image from "next/image";
import Subtitle, { SubtitleContainer } from "@/components/elements/Subtitle";
import P from "@/components/elements/P";
import SectionMain from "@/components/elements/SectionMain";
import { PX, Color, Gap } from "@/components/enum/";
import Tradicional from "./menu/Tradicional";
import Especial from "./menu/Especial";
import Fit from "./menu/Fit";
import Doce from "./menu/Doce";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState("Tradicionais");
  const [showMenu, setShowMenu] = useState("Tradicionais");

  const handleClick = (menu: string) => {
    setActiveMenu(menu);
    setShowMenu(menu);
  };

  return (
    <SectionMain gap={Gap["80px"]} px={PX["32px"]}>
      <SubtitleContainer gap={Gap["16px"]}>
        <Subtitle text="Cardapío" color={Color.red} />
        <P text="Grande variedades de produtos e ingredientes, não deixe para amanhã o que você pode comer hoje." />
      </SubtitleContainer>
      <ul className="relative flex items-center justify-center gap-8 text-center text-xl max-md:flex-col sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
        <li
          className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${
            showMenu === "Tradicionais"
              ? "bg-[#ff0000] text-white"
              : "border-neutral-300 hover:text-[#ff0000]"
          }`}
        >
          <a className="px-16" onClick={() => handleClick("Tradicionais")}>
            Tradicionais
          </a>
        </li>
        <li
          className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${
            showMenu === "Especiais"
              ? "bg-[#ff0000] text-white"
              : "border-neutral-300 hover:text-[#ff0000]"
          }`}
        >
          <a className="px-16" onClick={() => handleClick("Especiais")}>
            Especiais
          </a>
        </li>
        <li
          className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${
            showMenu === "Doce"
              ? "bg-[#ff0000] text-white"
              : "border-neutral-300 hover:text-[#ff0000]"
          }`}
        >
          <a className="px-16" onClick={() => handleClick("Doce")}>
            Doce
          </a>
        </li>
        <li
          className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${
            showMenu === "Fit"
              ? "bg-[#ff0000] text-white"
              : "border-neutral-300 hover:text-[#ff0000]"
          }`}
        >
          <a className="px-16" onClick={() => handleClick("Fit")}>
            Fit
          </a>
        </li>
      </ul>
      {showMenu === "Tradicionais" && <Tradicional />}
      {showMenu === "Especiais" && <Especial />}
      {showMenu === "Doce" && <Doce />}
      {showMenu === "Fit" && <Fit />}
      <Image
        className="absolute top-0 -left-2"
        src={"/img/decorative/pepper.svg"}
        alt="folha"
        width={100}
        height={100}
      ></Image>
    </SectionMain>
  );
}
