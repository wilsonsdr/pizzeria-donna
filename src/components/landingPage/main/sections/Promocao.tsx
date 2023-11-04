import React from 'react';
import Image from 'next/image';
import Container, { ContainerChild } from '@/components/elements/Container';
import BgImage, { BgShadow } from '@/components/elements/BgImage';
import { MdSize, Orientation, Justify, PX, PY, Gap } from '@/components/enum';
import Subtitle, { SubtitleContainer } from '@/components/elements/Subtitle';
import SectionMain from '@/components/elements/SectionMain';
import { Color } from '@/components/enum/color';

export default function Promocao() {
  return (
    <SectionMain gap={Gap['0px']} px={PX['0px']}>
      <BgImage url='/img/pizza02.webp'>
        <BgShadow py={PY['32px']} px={PX['32px']}>
          <Subtitle text='Promoção da semana' color={Color.green} py={PY['32px']} />
          <Container gap={Gap['0px']} justify={Justify.center}>
            <ContainerChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
              <Image className='h-[300px] w-full bg-cover bg-center bg-no-repeat object-cover max-md:hidden' src={'/img/pizza03.webp'} width={300} height={450} alt='pizza de calabresa'></Image>
            </ContainerChild>
            <ContainerChild mdSize={MdSize.w6v12} justify={Justify.center} orientation={Orientation.mdCol} gap={Gap['0px']}>
              <div className='flex h-[250px] w-full items-center justify-center border-r-4 border-r-[#2ba600] text-white max-md:h-auto max-md:border-b-4 max-md:border-b-[#2ba600] max-md:border-r-transparent'>
                <BgShadow py={PY['32px']} px={PX['32px']}>
                  <SubtitleContainer gap={Gap['16px']}>
                    <h3 className='font-title text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Pizza Calabresa</h3>
                    <p>É especialmente preparada com recheio de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A massa deliciosa e macia e a borda crocante complementam a nossa versão da pizza de Calabresa.</p>
                  </SubtitleContainer>
                </BgShadow>
              </div>
            </ContainerChild>
          </Container>
          <Image className='absolute -top-14 right-0' src={'/img/decorative/leaf.svg'} alt='folha' width={60} height={60}></Image>
        </BgShadow>
      </BgImage>
    </SectionMain>
  );
}
