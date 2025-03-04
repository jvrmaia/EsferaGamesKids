import { useState, useEffect, useCallback } from 'react';
import { Player } from '../types';

const RANKING_KEY = 'esfera-memory-game-ranking';

const useRanking = () => {
  const [ranking, setRanking] = useState<Player[]>([]);

  // Carregar o ranking do localStorage
  useEffect(() => {
    const savedRanking = localStorage.getItem(RANKING_KEY);
    if (savedRanking) {
      try {
        const parsedRanking = JSON.parse(savedRanking);
        setRanking(parsedRanking);
      } catch (error) {
        console.error('Erro ao carregar o ranking:', error);
        setRanking([]);
      }
    }
  }, []);

  // Adicionar um novo jogador ao ranking
  const addPlayer = useCallback((player: Player) => {
    setRanking((prevRanking) => {
      // Adicionar o novo jogador
      const newRanking = [...prevRanking, player];
      
      // Ordenar por tempo (menor tempo primeiro)
      newRanking.sort((a, b) => a.time - b.time);
      
      // Manter apenas os 5 melhores
      const topFive = newRanking.slice(0, 5);
      
      // Salvar no localStorage
      localStorage.setItem(RANKING_KEY, JSON.stringify(topFive));
      
      return topFive;
    });
  }, []);

  // Limpar o ranking
  const clearRanking = useCallback(() => {
    localStorage.removeItem(RANKING_KEY);
    setRanking([]);
  }, []);

  return {
    ranking,
    addPlayer,
    clearRanking,
  };
};

export default useRanking; 