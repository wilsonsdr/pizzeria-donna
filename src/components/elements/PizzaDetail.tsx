import React from 'react';
import { Color } from '../enum';

interface PizzaDetailProps {
  text: string;
  price: string;
  ingredients: string;
  color?: Color;
}

export default function PizzaDetail(props: PizzaDetailProps) {
  return (
    <li className='flex w-full flex-col gap-4 max-md:text-start'>
      <div className='flex flex-wrap items-center justify-between'>
        <h3 className='font-title text-xl text-red sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>{props.text}</h3>
        <span className={`text-base font-bold sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl ${props.color}`}>$ {props.price}</span>
      </div>
      <p className='text-black sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>{props.ingredients}</p>
    </li>
  );
}
