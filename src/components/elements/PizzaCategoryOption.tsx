import React from 'react';

interface PizzaCategoryOptionProps {
  flavor: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PizzaCategoryOption(props: PizzaCategoryOptionProps) {
  return (
    <a className={`w-1/2 cursor-pointer rounded-sm border-[1px] px-6 py-2 transition duration-200 ease-out ${props.isActive ? 'bg-red text-white' : 'border-black hover:border-red hover:text-red'}`} onClick={props.onClick}>
      {props.flavor}
    </a>
  );
}
