import React from 'react';

const Header: React.FC = () => {
  // Usar o import.meta.env.BASE_URL para obter o caminho base configurado no Vite
  const basePath = import.meta.env.BASE_URL;

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex items-center">
          <img 
            src={`${basePath}images/esfera-logo.svg`}
            alt="Esfera Papelaria" 
            className="h-16"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-purple-700">Kids Game</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 