import React from "react";
import { Color, PY, PX } from "../enum/";

interface SubtitleProps {
  text: string;
  color?: Color;
  px?: PX;
  py?: PY;
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <h2
      className={`font-title text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl ${props.color} ${props.px} ${props.py}`}
    >
      {props.text}
    </h2>
  );
}

interface SubtitleContainerProps {
  children: React.ReactNode;
  color?: Color;
}

export function SubtitleContainer(props: SubtitleContainerProps) {
  return (
    <div className="item-center flex flex-col justify-center gap-4 text-center">
      {props.children}
    </div>
  );
}
