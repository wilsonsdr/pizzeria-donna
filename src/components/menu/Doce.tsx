import React from 'react';
import List from '@/components/elements/List';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Gap, MdSize } from '@/components/enum';

export default function Doce() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Brigadeiro' price='42,00' ingredients='Chocolate ao leite com granulado' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Prestígio' price='42,00' ingredients='Beijinho com chocolate' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <List text='Romeu e Julieta' price='42,00' ingredients='Goiabada e queijo branco' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}></GridChild>
      </Grid>
    </ul>
  );
}
