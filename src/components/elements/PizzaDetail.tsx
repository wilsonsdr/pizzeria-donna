import React from 'react';
import { Color } from '../enum';

interface PizzaDetailProps {
  name: string;
  price: number;
  ingredients: string;
  color?: Color;
}

export default function PizzaDetail(props: PizzaDetailProps) {
  return (
    <li className='flex w-full flex-col gap-4 max-md:text-start'>
      <div className='flex flex-wrap items-center justify-between'>
        <h3 className='font-title text-2xl text-red sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>{props.name}</h3>
        <span className={`text-lg font-bold text-black sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl ${props.color}`}>$ {props.price}</span>
      </div>
      <p className='text-lg text-black sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{props.ingredients}</p>
    </li>
  );
}
