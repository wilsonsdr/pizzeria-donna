import React from 'react';
import PizzaDetail from '@/components/elements/PizzaDetail';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Gap, Justify, MdSize, Orientation } from '@/components/enum';

export default function Special() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Truffle Delight' price='18.99' ingredients='Black truffle oil, wild mushrooms, arugula, and Parmesan shavings' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Seafood Sensation' price='20.99' ingredients='Shrimp, scallops, calamari, mussels, garlic, and parsley' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='BBQ Pulled Pork' price='17.99' ingredients='BBQ pulled pork, red onion, cilantro, and mozzarella' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Gourmet Meat Feast' price='19.99' ingredients='Pepperoni, sausage, bacon, ham, and ground beef' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Mediterranean Masterpiece' price='18.99' ingredients='Grilled chicken, feta cheese, Kalamata olives, roasted red peppers, and oregano' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Vegetarian Deluxe' price='17.99' ingredients='Spinach, artichoke hearts, sun-dried tomatoes, roasted red peppers, and goat cheese' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Mediterranean Lamb' price='20.99' ingredients='Ground lamb, feta cheese, Kalamata olives, red onion, and tzatziki sauce' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Thai Chicken' price='18.99' ingredients='Thai curry sauce, chicken, bell peppers, pineapple, and cilantro' />
        </GridChild>
      </Grid>
    </ul>
  );
}
