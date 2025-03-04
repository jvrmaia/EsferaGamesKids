import React from 'react';
import { Card } from '../types';

interface MemoryCardProps {
  card: Card;
  onClick: (card: Card) => void;
  disabled: boolean;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ card, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled && !card.flipped && !card.matched) {
      onClick(card);
    }
  };

  return (
    <div 
      className="relative w-24 h-32 md:w-28 md:h-36 cursor-pointer perspective-500"
      onClick={handleClick}
    >
      {/* Container para o efeito de flip */}
      <div 
        className={`relative w-full h-full transition-transform duration-300 transform-style-3d ${
          card.flipped || card.matched ? 'rotate-y-180' : ''
        }`}
      >
        {/* Verso do cartão (face inicial) */}
        <div className="absolute w-full h-full rounded-lg shadow-md backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
        </div>
        
        {/* Frente do cartão (face virada) */}
        <div className="absolute w-full h-full rounded-lg shadow-md backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white rounded-lg p-2 flex flex-col items-center justify-center">
            <img 
              src={card.imageUrl} 
              alt={card.name} 
              className="w-full h-3/4 object-contain"
            />
            <p className="text-center text-xs mt-1 font-medium text-gray-700">{card.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard; 