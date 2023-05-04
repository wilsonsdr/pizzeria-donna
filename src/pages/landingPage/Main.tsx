import React from "react";
import Image from "next/image";
import Container, { ContainerChild } from "@/components/elements/Container";
import BgImage, { BgShadow } from "@/components/elements/BgImage";
import { MdSize, Orientation, Justify, Gap } from "@/components/enum";
import Subtitle, { SubtitleContainer } from "@/components/elements/Subtitle";
import P from "@/components/elements/P";
import Section from "@/components/elements/Section";
import { PX, PY } from "@/components/enum/padding";
import { Color } from "@/components/enum/color";

export default function Main() {
  return (
    <main className="flex flex-col font-body">
      <Section px={PX["32px"]}>
        <SubtitleContainer>
          <Subtitle text="Unidos por um só motivo" />
          <P text="Somos a primeira pizzaria a focar nesse tipo de serviço. Contribuindo com uma melhor experiência, segurança, conforto e qualidade. Para realizar um pedido basta usar o nosso chatbot!!!" />
        </SubtitleContainer>
        <Container gap={Gap["16px"]}>
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
          <ContainerChild mdSize={MdSize.w6v12}>
            <Image
              className="bg-cover bg-center bg-no-repeat object-cover max-md:h-[300px]"
              src={"/img/pizza01.webp"}
              width={700}
              height={500}
              alt="pessoa fazendo pizza"
            ></Image>
          </ContainerChild>
        </Container>
      </Section>

      {/* promoção da semana */}
      <Section>
        <BgImage url="/img/pizza02.webp">
          <BgShadow>
            <Subtitle
              text="Promoção da semana"
              color={Color.green}
              py={PY["32px"]}
            />
            <Container px={PX["32px"]}>
              <ContainerChild
                mdSize={MdSize.w6v12}
                justify={Justify.center}
                orientation={Orientation.mdCol}
              >
                <Image
                  className="h-[300px] w-full bg-cover bg-center bg-no-repeat object-cover max-md:hidden"
                  src={"/img/pizza03.webp"}
                  width={300}
                  height={450}
                  alt="pizza de calabresa"
                ></Image>
              </ContainerChild>
              <ContainerChild
                mdSize={MdSize.w6v12}
                justify={Justify.center}
                orientation={Orientation.mdCol}
              >
                <div className="flex h-[250px] w-full items-center justify-center border-r-4 border-r-[#2ba600] text-white max-md:h-auto max-md:border-b-4 max-md:border-b-[#2ba600] max-md:border-r-transparent">
                  <BgShadow>
                    <div className="flex flex-col gap-2 p-8">
                      <h3 className="font-title text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
                        Pizza Calabresa
                      </h3>
                      <p>
                        É especialmente preparada com recheio de linguiça
                        calabresa de primeira qualidade, queijo muçarela e
                        orégano. A massa deliciosa e macia e a borda crocante
                        complementam a nossa versão da pizza de Calabresa.
                      </p>
                    </div>
                  </BgShadow>
                </div>
              </ContainerChild>
            </Container>
            <Image
              className="absolute -top-14 right-0"
              src={"/img/decorative/leaf.svg"}
              alt="folha"
              width={60}
              height={60}
            ></Image>
          </BgShadow>
        </BgImage>
      </Section>
    </main>
  );
}
