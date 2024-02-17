import React from 'react';
import { PX, PY } from '../enum';

interface BackgroundImageProps {
  children: React.ReactNode;
  url: string;
}

export default function BackgroundImage(props: BackgroundImageProps) {
  return (
    <div
      className='h-[700px] w-full bg-cover bg-center bg-no-repeat object-cover'
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      {props.children}
    </div>
  );
}

interface BackgroundOverlayProps {
  children: React.ReactNode;
  px: PX;
  py: PY;
}

export function BackgroundOverlay(props: BackgroundOverlayProps) {
  return (
    <div className='relative h-full w-full bg-[rgba(0,0,0,0.7)]'>
      <div className={`flex h-full w-full flex-col items-center justify-center text-center ${props.px} ${props.py}`}>{props.children}</div>
    </div>
  );
}
