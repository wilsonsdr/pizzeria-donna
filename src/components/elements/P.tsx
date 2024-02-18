import React from 'react';
import { Color } from '../enum';

interface PProps {
  text: string;
  color?: Color;
}

export default function P(props: PProps) {
  return <p className={`text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl ${props.color}`}>{props.text}</p>;
}
