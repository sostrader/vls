// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title1: string;
  title2: string;
  title3: string;
}

const Header: React.FC<HeaderProps> = ({ title1, title2, title3 }) => {
  return (
    <header className="w-full text-center p-5 bg-gray-900">
      <h1 className="text-4xl font-bold text-white">{title1}</h1>
      <h2 className="text-3xl font-semibold text-gray-300">{title2}</h2>
      <h3 className="text-2xl font-medium text-gray-400">{title3}</h3>
    </header>
  );
};

export default Header;
