import React from "react";
import List from "@/components/elements/List";
import Container, { ContainerChild } from "@/components/elements/Container";
import { Align, Gap, Justify, MdSize, Orientation } from "@/components/enum";

export default function Especial() {
  return (
    <div className="flex flex-col gap-8">
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild
          gap={Gap["16px"]}
          mdSize={MdSize.w6v12}
          orientation={Orientation.mdCol}
        >
          <List
            text="Champignon"
            price="55,00"
            ingredients="Champignon fatiado, cebola, catupiry e azeitona preta"
          />
        </ContainerChild>
        <ContainerChild
          gap={Gap["16px"]}
          mdSize={MdSize.w6v12}
          orientation={Orientation.mdCol}
          justify={Justify.left}
        >
          <List
            text="Mafiosa"
            price="55,00"
            ingredients="Molho Branco, abobrinha, gorgonzola, parmesão e azeitona preta"
          />
        </ContainerChild>
      </Container>
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Pepperoni"
            price="55,00"
            ingredients="Pepperoni, mussarela e azeitona preta"
          />
        </ContainerChild>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Romana"
            price="55,00"
            ingredients="Mussarela, rodelas de tomate, aliche importado, parmesão e azeitona preta"
          />
        </ContainerChild>
      </Container>
    </div>
  );
}
