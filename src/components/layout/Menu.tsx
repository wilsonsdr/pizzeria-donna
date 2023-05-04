import React from "react";
import Image from "next/image";
import { Gap } from "@/components/enum";
import Subtitle, { SubtitleContainer } from "@/components/elements/Subtitle";
import P from "@/components/elements/P";
import Section from "@/components/elements/Section";
import { PX } from "@/components/enum/padding";
import { Color } from "@/components/enum/color";

export default function Menu() {
  return (
    <Section px={PX["32px"]} gap={Gap["80px"]}>
      <SubtitleContainer>
        <Subtitle text="Cardapío" color={Color.red} />
        <P text="Grande variedades de produtos e ingredientes, não deixe para amanhã o que você pode comer hoje." />
      </SubtitleContainer>
      <ul className="flex items-center justify-center gap-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
        <li className="cursor-pointer rounded-sm border-[1px] border-neutral-300 px-4 py-2">
          <a>Tradicionais</a>
        </li>
        <li className="cursor-pointer rounded-sm border-[1px] border-neutral-300 px-4 py-2">
          <a>Especiais</a>
        </li>
        <li className="cursor-pointer rounded-sm border-[1px] border-neutral-300 px-4 py-2">
          <a>Fit</a>
        </li>
        <li className="cursor-pointer rounded-sm border-[1px] border-neutral-300 px-4 py-2">
          <a>Doces</a>
        </li>
      </ul>
    </Section>
  );
}
