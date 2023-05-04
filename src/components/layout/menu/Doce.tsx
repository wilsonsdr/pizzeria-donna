import React from "react";
import List from "@/components/elements/List";
import Container, { ContainerChild } from "@/components/elements/Container";
import { Align, Gap, Justify, MdSize, Orientation } from "@/components/enum";

export default function Doce() {
  return (
    <div className="flex flex-col gap-8">
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Brigadeiro"
            price="42,00"
            ingredients="Chocolate ao leite com granulado"
          />
        </ContainerChild>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Prestígio"
            price="42,00"
            ingredients="Beijinho com chocolate"
          />
        </ContainerChild>
      </Container>
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Romeu e Julieta"
            price="42,00"
            ingredients="Goiabada e queijo branco"
          />
        </ContainerChild>
        <ContainerChild
          gap={Gap["16px"]}
          mdSize={MdSize.w6v12}
        ></ContainerChild>
      </Container>
    </div>
  );
}
