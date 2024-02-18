import React from 'react';
import PizzaDetail from '@/components/elements/PizzaDetail';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Color, Gap, Justify, MdSize, Orientation } from '@/components/enum';

export default function Traditional() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']}>
          <PizzaDetail text='Margherita' price='9.99' ingredients='Tomato sauce, mozzarella cheese, fresh basil, and olive oil' />
        </GridChild>
        <GridChild gap={Gap['16px']}>
          <PizzaDetail text='Pepperoni Classic' price='8.00' ingredients='Pepperoni slices, mozzarella cheese, tomato sauce and oregano' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Four Cheese' price='11.99' ingredients='Mozzarella, cheddar, provolone, and Parmesan cheeses with tomato sauce' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Classic Cheese' price='9.99' ingredients='Tomato sauce, mozzarella cheese, and Parmesan cheese' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Supreme' price='11.99' ingredients='Pepperoni, sausage, bell peppers, onions, mushrooms, tomato sauce, and mozzarella cheese' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Vegetarian' price='10.99' ingredients='Bell peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Meat Feast' price='11.99' ingredients='Pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Mushroom and Olive' price='10.99' ingredients='Mushrooms, black olives, tomato sauce, and mozzarella cheese' />
        </GridChild>
      </Grid>
    </ul>
  );
}
