import React from "react";
import Image from "next/image";
import Container, { ContainerChild } from "@/components/elements/Container";
import {
  MdSize,
  Orientation,
  Justify,
  Align,
  PX,
  Gap,
} from "@/components/enum";
import Subtitle, { SubtitleContainer } from "@/components/elements/Subtitle";
import P from "@/components/elements/P";
import SectionMain from "@/components/elements/SectionMain";

export default function Experience() {
  return (
    <SectionMain gap={Gap["80px"]} px={PX["32px"]}>
      <SubtitleContainer gap={Gap["16px"]}>
        <Subtitle text="Unidos por um só motivo" />
        <P text="Somos a primeira pizzaria a focar nesse tipo de serviço. Contribuindo com uma melhor experiência, segurança, conforto e qualidade. Para realizar um pedido basta usar o nosso chatbot!!!" />
      </SubtitleContainer>
      <Container align={Align.center} gap={Gap["32px"]}>
        <ContainerChild
          mdSize={MdSize.w6v12}
          justify={Justify.center}
          orientation={Orientation.mdCol}
          gap={Gap["16px"]}
        >
          <Subtitle text="Não tenha medo de pedir, a fome não espera" />
          <ul className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <li>✓ Ingredientes de primeira qualidade</li>
            <li>✓ Receitas inspiradas</li>
            <li>✓ Amor em cada detalhe</li>
            <li>
              ✓ Nosso compromisso é estar sempre presente e atendendo às suas
              necessidades
            </li>
          </ul>
        </ContainerChild>
        <ContainerChild gap={Gap["0px"]} mdSize={MdSize.w6v12}>
          <Image
            className="bg-cover bg-center bg-no-repeat object-cover max-md:h-[300px]"
            src={"/img/pizza01.webp"}
            width={700}
            height={500}
            alt="pessoa fazendo pizza"
          ></Image>
        </ContainerChild>
      </Container>
    </SectionMain>
  );
}
