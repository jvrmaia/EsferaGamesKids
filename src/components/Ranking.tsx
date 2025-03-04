import React from 'react';
import { Player } from '../types';

interface RankingProps {
  players: Player[];
}

const Ranking: React.FC<RankingProps> = ({ players }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">Ranking</h2>
      
      {players.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum jogador registrado ainda.</p>
      ) : (
        <div className="space-y-2">
          {players.map((player, index) => {
            // Formatar o tempo em minutos e segundos
            const minutes = Math.floor(player.time / 60);
            const seconds = player.time % 60;
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            return (
              <div 
                key={index} 
                className={`flex justify-between items-center p-3 rounded-md ${
                  index === 0 ? 'bg-yellow-100' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="font-bold text-lg w-8 text-center">{index + 1}</span>
                  <span className="font-medium">{player.name}</span>
                </div>
                <span className="font-mono text-gray-700">{formattedTime}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Ranking; 