import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Esfera Papelaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 