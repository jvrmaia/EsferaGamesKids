import React, { useState } from 'react';

interface PlayerFormProps {
  onSubmit: (name: string) => void;
  time: number;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ onSubmit, time }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Por favor, digite seu nome');
      return;
    }
    
    onSubmit(name.trim());
  };

  // Formatar o tempo em minutos e segundos
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">Parabéns!</h2>
      <p className="text-center text-gray-600 mb-4">
        Você completou o jogo em <span className="font-bold">{formattedTime}</span>
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-1">
            Seu nome
          </label>
          <input
            type="text"
            id="playerName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Digite seu nome"
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default PlayerForm; 