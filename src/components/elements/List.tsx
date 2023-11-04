import React from 'react';

interface ListProps {
  text: string;
  price: string;
  ingredients: string;
}

export default function List(props: ListProps) {
  return (
    <div className='flex w-full flex-col gap-4 max-md:text-start'>
      <div className='flex flex-wrap items-center justify-between'>
        <h3 className='font-title text-xl text-[#ff0000] sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>{props.text}</h3>
        <span className='text-base font-bold text-[#333] sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl'>R$ {props.price}</span>
      </div>
      <p className='sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>{props.ingredients}</p>
    </div>
  );
}
