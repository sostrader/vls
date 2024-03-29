// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title1: string;
  title2: string;
  
}

const Header: React.FC<HeaderProps> = ({ title1, title2 }) => {
  return (
    <header className="w-full text-center p-5 bg-gray-900">
      <h1 className="text-2lg font-bold text-white">{title1}</h1>
      <h2 className="text-2lg font-semibold text-white">{title2}</h2>
    </header>
  );
};

export default Header;
