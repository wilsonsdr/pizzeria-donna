import React from 'react';
import { Color, Gap, PY } from '../enum/';

interface SubtitleProps {
  text: string;
  color?: Color;
  py?: PY;
}

export default function Subtitle(props: SubtitleProps) {
  return <h2 className={`font-title text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl ${props.color} ${props.py}`}>{props.text}</h2>;
}

interface SubtitleContainerProps {
  children: React.ReactNode;
  color: Color;
  gap: Gap;
}

export function SubtitleContainer(props: SubtitleContainerProps) {
  return <div className={`item-center flex flex-col justify-center text-center ${props.gap} ${props.color}`}>{props.children}</div>;
}
