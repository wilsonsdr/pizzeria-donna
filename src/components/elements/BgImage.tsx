import React from 'react';
import { PX, PY } from '../enum';

interface BgImageProps {
  children: React.ReactNode;
  url: string;
}

export default function BgImage(props: BgImageProps) {
  return (
    <div
      className='h-[550px] bg-cover bg-center bg-no-repeat object-cover'
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      {props.children}
    </div>
  );
}

interface BgShadowProps {
  children: React.ReactNode;
  px: PX;
  py: PY;
}

export function BgShadow(props: BgShadowProps) {
  return (
    <div className='relative h-full w-full bg-[rgba(0,0,0,0.8)]'>
      <div className={`flex h-full w-full flex-col items-center justify-center text-center ${props.px} ${props.py}`}>{props.children}</div>
    </div>
  );
}
