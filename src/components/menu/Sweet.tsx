import React from 'react';
import PizzaDetail from '@/components/elements/PizzaDetail';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Gap, MdSize } from '@/components/enum';

export default function Sweet() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Sweet Nutella Delight' price={11.99} ingredients='Nutella, strawberries, banana slices, and powdered sugar' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Caramel Apple Bliss' price={12.99} ingredients='Caramel sauce, apple slices, cinnamon, and streusel topping' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name="Chocolate Lover's Dream" price={13.99} ingredients='Milk chocolate, dark chocolate, white chocolate, and chocolate chips' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Berry Berry Sweet' price={12.99} ingredients='Mixed berries, cream cheese, honey, and mint' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Peaches and Cream' price={11.99} ingredients='Sliced peaches, mascarpone cheese, honey, and almonds' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Banana Split Sensation' price={12.99} ingredients='Banana slices, chocolate sauce, strawberry sauce, chopped nuts, and whipped cream' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Apple Crumble' price={10.99} ingredients='Apple slices, cinnamon, streusel topping, and vanilla ice cream' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Raspberry White Chocolate' price={10.99} ingredients=' White chocolate sauce, raspberries, white chocolate shavings, and powdered sugar' />
        </GridChild>
      </Grid>
    </ul>
  );
}
