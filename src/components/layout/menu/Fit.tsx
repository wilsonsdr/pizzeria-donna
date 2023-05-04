import React from "react";
import List from "@/components/elements/List";
import Container, { ContainerChild } from "@/components/elements/Container";
import { Align, Gap, Justify, MdSize, Orientation } from "@/components/enum";

export default function Fit() {
  return (
    <div className="flex flex-col gap-8">
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild
          gap={Gap["16px"]}
          mdSize={MdSize.w6v12}
          orientation={Orientation.mdCol}
        >
          <List
            text="Fit"
            price="51,00"
            ingredients="Frango desfiado, ovos, brócolos, cebola roxa, palmido e azeitona preta"
          />
        </ContainerChild>
        <ContainerChild
          gap={Gap["16px"]}
          mdSize={MdSize.w6v12}
          orientation={Orientation.mdCol}
          justify={Justify.left}
        >
          <List
            text="Fit Gourmet"
            price="51,00"
            ingredients="Frango desfiado, pimentão vermelho, tomate seco, rúcula e azeitona preta"
          />
        </ContainerChild>
      </Container>
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Proteica"
            price="51,00"
            ingredients="Frango desfiado, atum, ovos, presunto parma, mussarela de búfala, tomate cereja e azeitona preta"
          />
        </ContainerChild>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Light"
            price="49,00"
            ingredients="Atum, abobrinha, alho poró, tomate cereja e azeitona preta"
          />
        </ContainerChild>
      </Container>
      <Container gap={Gap["32px"]} align={Align.start}>
        <ContainerChild gap={Gap["16px"]} mdSize={MdSize.w6v12}>
          <List
            text="Vegetariana"
            price="49,00"
            ingredients="Berinjela, ervilhas frescas, champignon, rodelas de palmito, mussarela de búfala e azeitona preta"
          />
        </ContainerChild>
      </Container>
    </div>
  );
}