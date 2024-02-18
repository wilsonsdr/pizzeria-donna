import Image from 'next/image';
import React, { useState } from 'react';
import BackgroundImage, { BackgroundOverlay } from '@/components/layout/BackgroundImage';
import { MdSize, Orientation, Justify, PY, PX, Gap, Color } from '@/components/enum';
import Subtitle, { SubtitleContainer } from '@/components/elements/Subtitle';
import P from '@/components/elements/P';
import Container from '@/components/layout/Container';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Doce, Especial, Fit, Tradicional } from '@/components/menu/Menu';
import Logo from '@/components/elements/Logo';
import PizzaFlavor from '@/components/elements/PizzaFlavor';

export default function Home() {
  const [showMenu, setShowMenu] = useState('Tradicionais');

  const handleClick = (menu: string) => {
    setShowMenu(menu);
  };

  return (
    <>
      <header>
        <BackgroundImage url='/img/background/pizza01.jpg'>
          <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
            <Logo span1='Pizzeria' span2="d'" span3='Donna' />
            <Image priority={true} className='absolute -bottom-[70px] -left-1' src={'/img/decorative/plant.svg'} alt='plant' width={80} height={80}></Image>
          </BackgroundOverlay>
        </BackgroundImage>
      </header>
      <main className='flex flex-col'>
        <Container gap={Gap['80px']} px={PX['32px']}>
          <SubtitleContainer gap={Gap['16px']} color={Color.black}>
            <Subtitle text='United just for one reason' />
            <P text='We are the first pizzeria to focus on this kind of service. Contributing to a better experience, security, comfort and quality. To place an order, simply use our chatbot! ' />
          </SubtitleContainer>
          <Grid gap={Gap['32px']}>
            <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['16px']}>
              <Subtitle text="Don't be afraid, the hungry doens't have to wait" />
              <ul className='text-black md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
                <li> ✓ First quality ingredients</li>
                <li> ✓ Inspired recipes</li>
                <li> ✓ Love in every detail</li>
                <li> ✓ Our commitment is to always be present and meet your needs</li>
              </ul>
            </GridChild>
            <GridChild gap={Gap['0px']} mdSize={MdSize.w6v12}>
              <Image priority={true} className='bg-cover bg-center bg-no-repeat object-cover max-md:h-[300px]' src={'/img/background/pizza02.jpg'} width={800} height={500} alt='person making pizza'></Image>
            </GridChild>
          </Grid>
        </Container>
        <Container gap={Gap['0px']} px={PX['0px']}>
          <BackgroundImage url='/img/background/pizza03.jpg'>
            <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
              <Subtitle text='Weekly Promotion' color={Color.green} py={PY['32px']} />
              <Grid gap={Gap['0px']} justify={Justify.center}>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <Image priority={true} className='h-[400px] w-full bg-cover bg-center bg-no-repeat object-cover max-md:hidden' src={'/img/background/pizza03.jpg'} width={1280} height={1280} alt='Pepperoni pizza'></Image>
                </GridChild>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <div className='max-md:border-r-transparent flex h-[250px] w-full items-center justify-center border-r-4 border-r-[#2ba600] text-white max-md:h-auto max-md:border-b-4 max-md:border-r-0 max-md:border-b-[#2ba600]'>
                    <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
                      <SubtitleContainer gap={Gap['16px']} color={Color.white}>
                        <h3 className='font-title text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Pepperoni Pizza</h3>
                        <p>It is specially prepared with first-quality Pepperoni sausage filling, mozzarella cheese, and oregano. The delicious and soft dough and the crunchy edge complement our version of Pepperoni pizza.</p>
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
          <SubtitleContainer gap={Gap['16px']} color={Color.black}>
            <Subtitle text='Cardapío' color={Color.red} />
            <P text='Grande variedades de produtos e ingredientes, não deixe para amanhã o que você pode comer hoje.' />
          </SubtitleContainer>
          <ul className='relative m-auto flex w-7/12 items-center justify-center gap-8 text-center text-xl max-md:flex-col max-sm:w-full sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>
            <PizzaFlavor flavor='Tradicionais' isActive={showMenu === 'Tradicionais'} onClick={() => handleClick('Tradicionais')} />
            <PizzaFlavor flavor='Especiais' isActive={showMenu === 'Especiais'} onClick={() => handleClick('Especiais')} />
            <PizzaFlavor flavor='Doce' isActive={showMenu === 'Doce'} onClick={() => handleClick('Doce')} />
            <PizzaFlavor flavor='Fit' isActive={showMenu === 'Fit'} onClick={() => handleClick('Fit')} />
          </ul>
          {showMenu === 'Tradicionais' && <Tradicional />}
          {showMenu === 'Especiais' && <Especial />}
          {showMenu === 'Doce' && <Doce />}
          {showMenu === 'Fit' && <Fit />}
          <Image priority={true} className='absolute -left-2 top-0' src={'/img/decorative/pepper.svg'} alt='folha' width={100} height={100}></Image>
        </Container>
      </main>
      <footer>
        <BackgroundImage url='/img/background/footer.jpg'>
          <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
            <Logo span1='Pizzeria' span2="d'" span3='Donna' />
            <Image priority={true} className='absolute -top-[70px] right-7' src={'/img/decorative/tomato.svg'} alt='folha' width={100} height={100}></Image>
          </BackgroundOverlay>
        </BackgroundImage>
      </footer>
    </>
  );
}
