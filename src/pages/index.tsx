import BackgroundImage, { BackgroundOverlay } from '@/components/elements/BackgroundImage';
import { PX, PY } from '@/components/enum';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <header>
        <BackgroundImage url='/img/banner-bg.webp'>
          <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
            <h1 className='flex gap-4 font-title text-5xl tracking-wider max-sm:flex-col sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>
              <span className='text-[#2ba600]'>Pizzaria</span>
              <span className='text-white'>d'</span>
              <span className='text-[#ff0000]'>Donna</span>
            </h1>
            <Image priority={true} className='absolute -bottom-[70px] -left-1' src={'/img/decorative/plant.svg'} alt='plant' width={80} height={80}></Image>
          </BackgroundOverlay>
        </BackgroundImage>
      </header>
    </>
  );
}
