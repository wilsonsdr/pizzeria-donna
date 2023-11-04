import React from 'react';

interface PProps {
  text: string;
}

export default function P(props: PProps) {
  return <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>{props.text}</p>;
}
