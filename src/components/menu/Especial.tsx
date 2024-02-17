import React from 'react';
import List from '@/components/elements/List';
import Grid, { GridChild } from '@/components/containers/Grid';
import { Align, Gap, Justify, MdSize, Orientation } from '@/components/enum';

export default function Especial() {
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
    </div>
  );
}
