// components/DelayedButton.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DelayedButton.module.css'; // Certifique-se de criar um arquivo CSS correspondente

interface DelayedButtonProps {
  isPlaying: boolean;
}

const DelayedButton: React.FC<DelayedButtonProps> = ({ isPlaying }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isPlaying) {
      timer = setTimeout(() => {
        setShowContent(true);
      }, 378600); // Ajuste o tempo de acordo com a necessidade
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPlaying]);

  if (!showContent) {
    return null;
  }

  return (
    <div className={styles.container}>
      <p className={styles.date}>OFERTA LIMITADA</p>
      <Link href="https://secure.doppus.com/pay/P9O5Z0M9O5Z0G905HJB" legacyBehavior>
        <a className={styles.button}>GARANTA O SEU AGORA</a>
      </Link>
    </div>
  );
};

export default DelayedButton;
