// page.tsx
import React from 'react';
import Header from '../../../components/Header'; // Ajuste o caminho conforme necessário
import { Player } from '../../../components/Player'; // Ajuste o caminho conforme necessário


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* Header component might have props like title1, title2 as per your previous setup */}
      <Header title1="MÉTODO ÚNICO E CIENTÍFICO DE INSIGHTS" title2="DA PERSONALIDADE"/>
      <main className="flex flex-col items-center p-0 w-full">
        <Player />
      </main>
      {/* <Footer /> Inclua o Footer aqui */}
    </div>
  );
}