// page.tsx
import React from 'react';
import Header from '../components/Header'; // Ajuste o caminho conforme necessário
import { Player } from '../components/Player'; // Ajuste o caminho conforme necessário

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header title1="A Mais Abrangente Exploração Científica das Personalidades Já Realizada" title2="Método Único no Mundo" title3="Ecos da Identidade" />
      <main className="flex flex-col items-center p-24 w-full">
      <Player />
      </main>
    </div>
  );
}
