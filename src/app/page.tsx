// page.tsx
import React from 'react';
import Header from '../components/Header'; // Ajuste o caminho conforme necessário
import { Player } from '../components/Player'; // Ajuste o caminho conforme necessário
import Footer from '../components/Footer'; // Ajuste o caminho conforme necessário

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header title1="MÉTODO ÚNICO E CIENTÍFICO DE INSIGHTS DA PERSONALIDADE" title2="PELA DATA DE NASCIMENTO"/>
      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center p-0 w-full">
        <Player />
      </main>
      {/* Footer pushed to the bottom */}
      <Footer />
    </div>
  );
}
