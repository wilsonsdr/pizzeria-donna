import Image from 'next/image';
import React, { useState } from 'react';
import BackgroundImage, { BackgroundOverlay } from '@/components/layout/BackgroundImage';
import { MdSize, Orientation, Justify, PY, PX, Gap, Color, LgSize } from '@/components/enum';
import Subtitle, { SubtitleContainer } from '@/components/elements/Subtitle';
import P from '@/components/elements/P';
import Container from '@/components/layout/Container';
import Grid, { GridChild } from '@/components/layout/Grid';
import { Sweet, Special, Fit, Traditional } from '@/components/menu/Menu';
import Logo from '@/components/elements/Logo';
import PizzaCategoryOption from '@/components/elements/PizzaCategoryOption';

export default function Home() {
  const [showMenu, setShowMenu] = useState('Traditional');

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
            <Subtitle color={Color.black} text='United just for one reason' />
            <P text='We are the first pizzeria to focus on this kind of service. Contributing to a better experience, security, comfort and quality. To place an order, simply use our chatbot! ' />
          </SubtitleContainer>
          <Grid gap={Gap['32px']}>
            <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['16px']}>
              <Subtitle color={Color.black} text="Don't be afraid, the hungry doens't have to wait" />
              <P color={Color.black} text='✓ First quality ingredients' />
              <P color={Color.black} text='✓ Inspired recipes' />
              <P color={Color.black} text='✓ Love in every detail' />
              <P color={Color.black} text='✓ Our commitment is to always be present and meet your needs' />
            </GridChild>
            <GridChild gap={Gap['0px']} mdSize={MdSize.w6v12}>
              <Image priority={true} className='bg-cover bg-center bg-no-repeat object-cover max-md:h-[300px]' src={'/img/background/pizza02.jpg'} width={800} height={500} alt='person making pizza'></Image>
            </GridChild>
          </Grid>
        </Container>
        <Container gap={Gap['0px']} px={PX['0px']}>
          <BackgroundImage url='/img/background/pizza03.jpg'>
            <BackgroundOverlay py={PY['80px']} px={PX['32px']}>
              <Subtitle color={Color.green} text='Weekly Promotion' />
              <Grid gap={Gap['0px']} justify={Justify.center}>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <Image priority={true} className='h-[400px] w-full bg-cover bg-center bg-no-repeat object-cover max-md:hidden' src={'/img/background/pizza03.jpg'} width={1280} height={1280} alt='Pepperoni pizza'></Image>
                </GridChild>
                <GridChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
                  <div className='max-md:border-r-transparent flex h-[250px] w-full items-center justify-center border-r-4 border-r-green text-white max-md:h-auto max-md:border-b-4 max-md:border-r-0 max-md:border-b-green'>
                    <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
                      <SubtitleContainer gap={Gap['16px']} color={Color.white}>
                        <h3 className='font-title text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Pepperoni Classic</h3>
                        <p className='text-lg sm:text-lg md:text-base lg:text-xl xl:text-xl 2xl:text-xl'>It is specially prepared with first-quality Pepperoni sausage filling, mozzarella cheese, tomato sauce and oregano. The delicious and soft dough and the crunchy edge complement our version of Pepperoni pizza.</p>
                      </SubtitleContainer>
                    </BackgroundOverlay>
                  </div>
                </GridChild>
              </Grid>
              <Image priority={true} className='absolute -top-12 right-0 max-sm:w-14' src={'/img/decorative/leaf.svg'} alt='leaf' width={60} height={60}></Image>
            </BackgroundOverlay>
          </BackgroundImage>
        </Container>
        <Container gap={Gap['80px']} px={PX['32px']}>
          <SubtitleContainer gap={Gap['16px']} color={Color.black}>
            <Subtitle color={Color.red} text='Menu' />
            <P text="A wide variety of products and ingredients, don't leave for tomorrow what you can eat today." />
          </SubtitleContainer>
          <ul className='relative m-auto flex w-7/12 items-center justify-center gap-8 text-center text-xl max-md:flex-col max-sm:w-full sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>
            <PizzaCategoryOption flavor='Traditional' isActive={showMenu === 'Traditional'} onClick={() => handleClick('Traditional')} />
            <PizzaCategoryOption flavor='Special' isActive={showMenu === 'Special'} onClick={() => handleClick('Special')} />
            <PizzaCategoryOption flavor='Sweet' isActive={showMenu === 'Sweet'} onClick={() => handleClick('Sweet')} />
            <PizzaCategoryOption flavor='Fit' isActive={showMenu === 'Fit'} onClick={() => handleClick('Fit')} />
          </ul>
          {showMenu === 'Traditional' && <Traditional />}
          {showMenu === 'Special' && <Special />}
          {showMenu === 'Sweet' && <Sweet />}
          {showMenu === 'Fit' && <Fit />}
          <Image priority={true} className='absolute -left-2 top-0' src={'/img/decorative/pepper.svg'} alt='pepper' width={100} height={100}></Image>
        </Container>
      </main>
      <footer>
        <BackgroundImage url='/img/background/footer.jpg'>
          <BackgroundOverlay py={PY['32px']} px={PX['32px']}>
            <Logo span1='Pizzeria' span2="d'" span3='Donna' />
            <Image priority={true} className='absolute -top-[70px] right-7 max-sm:-top-[50px] max-sm:w-28' src={'/img/decorative/tomato.svg'} alt='folha' width={100} height={100}></Image>
          </BackgroundOverlay>
        </BackgroundImage>
      </footer>
    </>
  );
}
