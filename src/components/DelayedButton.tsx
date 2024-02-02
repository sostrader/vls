// components/DelayedButton.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface DelayedButtonProps {
  isPlaying: boolean;
}

const DelayedButton: React.FC<DelayedButtonProps> = ({ isPlaying }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isPlaying) {
      timer = setTimeout(() => {
        setShowButton(true);
      }, 378000); // Timer starts when isPlaying is true
    }

    return () => clearTimeout(timer);
  }, [isPlaying]); // Dependency array includes isPlaying

  if (!showButton) {
    return null;
  }

  return (
  <div className="delayed-button-container"> {/* Adiciona o container com a classe para a margem */}
    <Link href={'https://secure.doppus.com/pay/P9O5Z0M9O5Z0G905HJB'} legacyBehavior>
    <a className="bg-green-500 text-white p-4 rounded-full text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">Eu quero</a>
    </Link>
  </div>
);
};

export default DelayedButton;
