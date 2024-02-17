import BackgroundImage, { BackgroundOverlay } from '@/components/elements/BackgroundImage';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdSize, Orientation, Justify, Align, PY, PX, Gap, Color } from '@/components/enum';
import Subtitle, { SubtitleContainer } from '@/components/elements/Subtitle';
import P from '@/components/elements/P';
import Container from '@/components/containers/Container';
import Grid, { GridChild } from '@/components/containers/Grid';
import { Doce, Especial, Fit, Tradicional } from '@/components/menu/Menu';

export default function Home() {
  const [showMenu, setShowMenu] = useState('Tradicionais');

  const handleClick = (menu: string) => {
    setShowMenu(menu);
  };

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
        <Container gap={Gap['0px']} px={PX['0px']}>
          <BackgroundImage url='/img/pizza02.webp'>
            <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
              <Subtitle text='Promoção da semana' color={Color.green} py={PY['32px']} />
              <Grid gap={Gap['0px']} justify={Justify.center}>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <Image className='h-[300px] w-full bg-cover bg-center bg-no-repeat object-cover max-md:hidden' src={'/img/pizza03.webp'} width={1280} height={1280} alt='pizza de calabresa'></Image>
                </GridChild>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <div className='flex h-[250px] w-full items-center justify-center border-r-4 border-r-[#2ba600] text-white max-md:h-auto max-md:border-b-4 max-md:border-r-0 max-md:border-b-[#2ba600] max-md:border-r-transparent'>
                    <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
                      <SubtitleContainer gap={Gap['16px']}>
                        <h3 className='font-title text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Pizza Calabresa</h3>
                        <p>É especialmente preparada com recheio de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A massa deliciosa e macia e a borda crocante complementam a nossa versão da pizza de Calabresa.</p>
                      </SubtitleContainer>
                    </BackgroundOverlay>
                  </div>
                </GridChild>
              </Grid>
              <Image priority={true} className='absolute -top-14 right-0' src={'/img/decorative/leaf.svg'} alt='folha' width={60} height={60}></Image>
            </BackgroundOverlay>
          </BackgroundImage>
        </Container>
        <Container gap={Gap['80px']} px={PX['32px']}>
          <SubtitleContainer gap={Gap['16px']}>
            <Subtitle text='Cardapío' color={Color.red} />
            <P text='Grande variedades de produtos e ingredientes, não deixe para amanhã o que você pode comer hoje.' />
          </SubtitleContainer>
          <ul className='relative flex items-center justify-center gap-8 text-center text-xl max-md:flex-col sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>
            <li className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${showMenu === 'Tradicionais' ? 'bg-[#ff0000] text-white' : 'border-neutral-300 hover:text-[#ff0000]'}`}>
              <a className='px-8' onClick={() => handleClick('Tradicionais')}>
                Tradicionais
              </a>
            </li>
            <li className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${showMenu === 'Especiais' ? 'bg-[#ff0000] text-white' : 'border-neutral-300 hover:text-[#ff0000]'}`}>
              <a className='px-8' onClick={() => handleClick('Especiais')}>
                Especiais
              </a>
            </li>
            <li className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${showMenu === 'Doce' ? 'bg-[#ff0000] text-white' : 'border-neutral-300 hover:text-[#ff0000]'}`}>
              <a className='px-8' onClick={() => handleClick('Doce')}>
                Doce
              </a>
            </li>
            <li className={`cursor-pointer rounded-sm border-[1px] py-2 transition duration-200 ease-out ${showMenu === 'Fit' ? 'bg-[#ff0000] text-white' : 'border-neutral-300 hover:text-[#ff0000]'}`}>
              <a className='px-8' onClick={() => handleClick('Fit')}>
                Fit
              </a>
            </li>
          </ul>
          {showMenu === 'Tradicionais' && <Tradicional />}
          {showMenu === 'Especiais' && <Especial />}
          {showMenu === 'Doce' && <Doce />}
          {showMenu === 'Fit' && <Fit />}
          <Image className='absolute -left-2 top-0' src={'/img/decorative/pepper.svg'} alt='folha' width={100} height={100}></Image>
        </Container>
      </main>
    </>
  );
}
