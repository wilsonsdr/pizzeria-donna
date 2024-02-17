import React from 'react';

interface LogoProps {
  span1: string;
  span2: string;
  span3: string;
}

export default function Logo(props: LogoProps) {
  return (
    <h1 className='flex gap-4 font-title text-5xl tracking-wider max-sm:flex-col sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>
      <span className='text-green'>{props.span1}</span>
      <span className='text-white'>{props.span2}</span>
      <span className='text-red'>{props.span3}</span>
    </h1>
  );
}
