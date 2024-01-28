// components/DelayedButton.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DelayedButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 100000); 

    return () => clearTimeout(timer);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <Link href={'https://secure.doppus.com/pay/P9O5Z0M9O5Z0G905HJB'} legacyBehavior>
      <a className="bg-green-500 text-white p-3 rounded">Eu quero</a>
    </Link>
  );
}
