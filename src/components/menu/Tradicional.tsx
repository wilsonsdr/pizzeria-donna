import React from 'react';
import List from '@/components/elements/List';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Align, Gap, Justify, MdSize, Orientation } from '@/components/enum';

export default function Tradicional() {
  return (
    <div className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol}>
          <List text='Champignon' price='55,00' ingredients='Champignon fatiado, cebola, catupiry e azeitona preta' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol} justify={Justify.left}>
          <List text='Mafiosa' price='55,00' ingredients='Molho Branco, abobrinha, gorgonzola, parmesão e azeitona preta' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Pepperoni' price='55,00' ingredients='Pepperoni, mussarela e azeitona preta' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Romana' price='55,00' ingredients='Mussarela, rodelas de tomate, aliche importado, parmesão e azeitona preta' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol}>
          <List text='Calabresa' price='55,00' ingredients='Linguiça calabresa, queijo muçarela, orégano e cebola' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol} justify={Justify.left}>
          <List text='Philadelphia' price='55,00' ingredients='Peito de peru, cream cheese Philadelphia e tomate seco' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol}>
          <List text='Fit' price='51,00' ingredients='Frango desfiado, ovos, brócolos, cebola roxa, palmido e azeitona preta' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12} orientation={Orientation.mdCol} justify={Justify.left}>
          <List text='Fit Gourmet' price='51,00' ingredients='Frango desfiado, pimentão vermelho, tomate seco, rúcula e azeitona preta' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Proteica' price='51,00' ingredients='Frango desfiado, atum, ovos, presunto parma, mussarela de búfala, tomate cereja e azeitona preta' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Light' price='49,00' ingredients='Atum, abobrinha, alho poró, tomate cereja e azeitona preta' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Vegetariana' price='49,00' ingredients='Berinjela, ervilhas frescas, champignon, rodelas de palmito, mussarela de búfala e azeitona preta' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Brigadeiro' price='42,00' ingredients='Chocolate ao leite com granulado' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']} align={Align.start}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Romeu e Julieta' price='42,00' ingredients='Goiabada e queijo branco' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Prestígio' price='42,00' ingredients='Beijinho com chocolate' />
        </GridChild>
      </Grid>
    </div>
  );
}
