import React, { useState, useEffect, useCallback } from 'react';
import MemoryCard from './MemoryCard';
import Timer from './Timer';
import PlayerForm from './PlayerForm';
import Ranking from './Ranking';
import { Card, Player } from '../types';
import { createDeck } from '../data/cards';
import useTimer from '../hooks/useTimer';
import useRanking from '../hooks/useRanking';

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showRanking, setShowRanking] = useState<boolean>(false);
  
  const { time, isFinished, startTimer, stopTimer, resetTimer, formatTime } = useTimer();
  const { ranking, addPlayer } = useRanking();
  
  // Inicializar o jogo
  const initGame = useCallback(() => {
    const newDeck = createDeck();
    setCards(newDeck);
    setFlippedCards([]);
    setMatchedPairs(0);
    setGameStarted(false);
    setGameCompleted(false);
    setShowForm(false);
    setShowRanking(false);
    resetTimer();
  }, [resetTimer]);
  
  // Inicializar o jogo ao montar o componente
  useEffect(() => {
    initGame();
  }, [initGame]);
  
  // Verificar se o jogo foi completado
  useEffect(() => {
    if (matchedPairs === 10 && gameStarted) {
      setGameCompleted(true);
      stopTimer();
      setShowForm(true);
    }
  }, [matchedPairs, gameStarted, stopTimer]);
  
  // Verificar se o tempo acabou
  useEffect(() => {
    if (isFinished && gameStarted && !gameCompleted) {
      // Tempo acabou, mostrar mensagem
      alert('Tempo esgotado! Tente novamente.');
      initGame();
    }
  }, [isFinished, gameStarted, gameCompleted, initGame]);
  
  // Lidar com o clique em uma carta
  const handleCardClick = (clickedCard: Card) => {
    if (!gameStarted) {
      setGameStarted(true);
      startTimer();
    }
    
    if (isChecking || flippedCards.length >= 2 || clickedCard.flipped || clickedCard.matched) {
      return;
    }
    
    // Virar a carta clicada
    const updatedCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, flipped: true } : card
    );
    
    setCards(updatedCards);
    
    // Adicionar a carta à lista de cartas viradas
    const updatedFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(updatedFlippedCards);
    
    // Se duas cartas foram viradas, verificar se são iguais
    if (updatedFlippedCards.length === 2) {
      setIsChecking(true);
      
      setTimeout(() => {
        const [firstCard, secondCard] = updatedFlippedCards;
        
        if (firstCard.name === secondCard.name) {
          // Par encontrado
          setCards(prevCards => 
            prevCards.map(card => 
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, matched: true }
                : card
            )
          );
          
          setMatchedPairs(prev => prev + 1);
        } else {
          // Não é um par, virar as cartas de volta
          setCards(prevCards => 
            prevCards.map(card => 
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
        }
        
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };
  
  // Lidar com o envio do formulário de nome do jogador
  const handlePlayerSubmit = (name: string) => {
    const player: Player = {
      name,
      time: 300 - time, // Tempo gasto = tempo inicial - tempo restante
    };
    
    addPlayer(player);
    setShowForm(false);
    setShowRanking(true);
  };
  
  // Iniciar um novo jogo
  const handleNewGame = () => {
    initGame();
  };
  
  // Renderizar o conteúdo com base no estado do jogo
  const renderContent = () => {
    if (showForm) {
      return <PlayerForm onSubmit={handlePlayerSubmit} time={300 - time} />;
    }
    
    if (showRanking) {
      return (
        <div className="space-y-6">
          <Ranking players={ranking} />
          <button
            onClick={handleNewGame}
            className="w-full max-w-md mx-auto block bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Jogar Novamente
          </button>
        </div>
      );
    }
    
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Jogo da Memória</h2>
          <Timer time={formatTime()} isFinished={isFinished} />
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
          {cards.map(card => (
            <MemoryCard
              key={card.id}
              card={card}
              onClick={handleCardClick}
              disabled={isChecking}
            />
          ))}
        </div>
        
        {!gameStarted && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">Clique em uma carta para começar o jogo!</p>
            <p className="text-sm text-gray-500">Você tem 5 minutos para encontrar todos os pares.</p>
          </div>
        )}
      </>
    );
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {renderContent()}
    </div>
  );
};

export default MemoryGame; 