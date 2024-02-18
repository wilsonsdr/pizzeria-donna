import React from 'react';
import PizzaDetail from '@/components/elements/PizzaDetail';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Gap, Justify, MdSize, Orientation } from '@/components/enum';

export default function Fit() {
  return (
    <ul className='flex flex-col gap-8'>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Supreme' price='13.99' ingredients='Shredded chicken, turkey bacon, eggs, spinach, cherry tomatoes, and black olives' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Veggie Delight' price='12.99' ingredients='Zucchini, bell peppers, mushrooms, red onion, artichoke hearts, and sun-dried tomatoes' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Mediterranean' price='14.99' ingredients='Grilled chicken, feta cheese, Kalamata olives, red onion, roasted red peppers, and oregano' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Spicy Chicken' price='13.99' ingredients='Spicy grilled chicken, jalapeños, red onion, bell peppers, mozzarella, and marinara sauce' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Hawaiian' price='12.99' ingredients='Grilled chicken, turkey bacon, pineapple, red onion, barbecue sauce, and cilantro' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='BBQ Chicken' price='13.99' ingredients='Barbecue chicken, red onion, cilantro, mozzarella, barbecue sauce, and ranch drizzle' />
        </GridChild>
      </Grid>
      <Grid gap={Gap['32px']}>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Quinoa Power' price='12.99' ingredients='Quinoa, spinach, cherry tomatoes, feta cheese, and balsamic glaze' />
        </GridChild>
        <GridChild gap={Gap['16px']} mdSize={MdSize.w6v12}>
          <PizzaDetail text='Turkey Avocado' price='13.99' ingredients='Turkey slices, avocado, mixed greens, cherry tomatoes, and honey mustard dressing' />
        </GridChild>
      </Grid>
    </ul>
  );
}
