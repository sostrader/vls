// page.tsx
import React from 'react';
import Header from '../components/Header'; // Ajuste o caminho conforme necessário
import { Player } from '../components/Player'; // Ajuste o caminho conforme necessário

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* <Header title1="A Mais Abrangente Exploração Científica das Personalidades Já Realizada" title2="Método Único no Mundo" title3="Ecos da Identidade" /> */}
      <Header title1="Descubra o Poder Único da Classificação de Personalidades por Data de Nascimento" title2="O Primeiro e Mais Abrangente Método Científico no Mundo"/>
      <main className="flex flex-col items-center p-0 w-full">
      <Player />
      </main>
    </div>
  );
}
