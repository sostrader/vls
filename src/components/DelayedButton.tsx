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
      }, 100000); // Timer starts when isPlaying is true
    }

    return () => clearTimeout(timer);
  }, [isPlaying]); // Dependency array includes isPlaying

  if (!showButton) {
    return null;
  }

  return (
    <Link href={'https://secure.doppus.com/pay/P9O5Z0M9O5Z0G905HJB'} legacyBehavior>
      <a className="bg-green-500 text-white p-2 rounded">Eu quero</a>
    </Link>
  );
};

export default DelayedButton;
