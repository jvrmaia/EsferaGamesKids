import { Card } from '../types';

// Dados das cartas (sem as propriedades flipped e matched)
const cardData = [
  {
    id: 1,
    name: 'Lápis',
    imageUrl: '/images/pencil.png',
  },
  {
    id: 2,
    name: 'Caneta',
    imageUrl: '/images/pen.png',
  },
  {
    id: 3,
    name: 'Borracha',
    imageUrl: '/images/eraser.png',
  },
  {
    id: 4,
    name: 'Caderno',
    imageUrl: '/images/notebook.png',
  },
  {
    id: 5,
    name: 'Régua',
    imageUrl: '/images/ruler.png',
  },
  {
    id: 6,
    name: 'Tesoura',
    imageUrl: '/images/scissors.png',
  },
  {
    id: 7,
    name: 'Cola',
    imageUrl: '/images/glue.png',
  },
  {
    id: 8,
    name: 'Apontador',
    imageUrl: '/images/sharpener.png',
  },
  {
    id: 9,
    name: 'Pincel',
    imageUrl: '/images/brush.png',
  },
  {
    id: 10,
    name: 'Mochila',
    imageUrl: '/images/backpack.png',
  },
];

// Função para criar o baralho de cartas
export const createDeck = (): Card[] => {
  // Duplicar as cartas para criar pares
  const duplicatedCards = [...cardData, ...cardData].map((card, index) => ({
    ...card,
    id: index + 1, // Atribuir um ID único para cada carta
    flipped: false,
    matched: false,
  }));
  
  // Embaralhar as cartas
  return shuffleArray(duplicatedCards);
};

// Função para embaralhar um array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}; 