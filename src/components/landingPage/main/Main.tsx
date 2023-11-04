import React from 'react';
import Experiencia from './sections/Experiencia';
import Promocao from '@/components/landingPage/main/sections/Promocao';
import Cardapio from '@/components/landingPage/main/sections/Cardapio';

export default function Main() {
  return (
    <main className='flex flex-col font-body'>
      <Experiencia />
      <Promocao />
      <Cardapio />
    </main>
  );
}
