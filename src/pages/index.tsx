import BackgroundImage, { BackgroundOverlay } from '@/components/elements/BackgroundImage';
import Image from 'next/image';
import React from 'react';
import { MdSize, Orientation, Justify, Align, PY, PX, Gap } from '@/components/enum';
import Subtitle, { SubtitleContainer } from '@/components/elements/Subtitle';
import P from '@/components/elements/P';
import Container from '@/components/containers/Container';
import Grid, { GridChild } from '@/components/containers/Grid';

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
      <main className='flex flex-col'>
        <Container gap={Gap['80px']} px={PX['32px']}>
          <SubtitleContainer gap={Gap['16px']}>
            <Subtitle text='Unidos por um só motivo' />
            <P text='Somos a primeira pizzaria a focar nesse tipo de serviço. Contribuindo com uma melhor experiência, segurança, conforto e qualidade. Para realizar um pedido basta usar o nosso chatbot!!!' />
          </SubtitleContainer>
          <Grid align={Align.center} gap={Gap['32px']}>
            <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['16px']}>
              <Subtitle text='Não tenha medo de pedir, a fome não espera' />
              <ul className='text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
                <li>✓ Ingredientes de primeira qualidade</li>
                <li>✓ Receitas inspiradas</li>
                <li>✓ Amor em cada detalhe</li>
                <li>✓ Nosso compromisso é estar sempre presente e atendendo às suas necessidades</li>
              </ul>
            </GridChild>
            <GridChild gap={Gap['0px']} mdSize={MdSize.w6v12}>
              <Image className='bg-cover bg-center bg-no-repeat object-cover max-md:h-[300px]' src={'/img/pizza01.webp'} width={800} height={500} alt='pessoa fazendo pizza'></Image>
            </GridChild>
          </Grid>
        </Container>
      </main>
    </>
  );
}
