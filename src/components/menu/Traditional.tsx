import React from 'react';
import PizzaDetail from '@/components/elements/PizzaDetail';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Gap, MdSize } from '@/components/enum';

export default function Traditional() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Margherita' price={9.99} ingredients='Tomato sauce, mozzarella cheese, fresh basil, and olive oil' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Pepperoni Classic' price={6.99} ingredients='Pepperoni slices, mozzarella cheese, tomato sauce and oregano' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Four Cheese' price={11.99} ingredients='Mozzarella, cheddar, provolone, and Parmesan cheeses with tomato sauce' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Classic Cheese' price={9.99} ingredients='Tomato sauce, mozzarella cheese, and Parmesan cheese' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Meat Feast' price={11.99} ingredients='Pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Mushroom and Olive' price={10.99} ingredients='Mushrooms, black olives, tomato sauce, and mozzarella cheese' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Neapolitan' price={11.99} ingredients='Tomato sauce, mozzarella cheese, basil, and olive oil' />
        </GridChild>
        <GridChild mdSize={MdSize.w6v12}>
          <PizzaDetail name='Vegetarian' price={10.99} ingredients='Bell peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese' />
        </GridChild>
      </Grid>
    </ul>
  );
}
