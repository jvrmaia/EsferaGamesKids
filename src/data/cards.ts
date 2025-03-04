import { Card } from '../types';

// Obter o caminho base configurado no Vite
const basePath = import.meta.env.BASE_URL;

// Dados das cartas (sem as propriedades flipped e matched)
const cardData = [
  {
    id: 1,
    name: 'Lápis',
    imageUrl: `${basePath}images/pencil.png`,
  },
  {
    id: 2,
    name: 'Caneta',
    imageUrl: `${basePath}images/pen.png`,
  },
  {
    id: 3,
    name: 'Borracha',
    imageUrl: `${basePath}images/eraser.png`,
  },
  {
    id: 4,
    name: 'Caderno',
    imageUrl: `${basePath}images/notebook.png`,
  },
  {
    id: 5,
    name: 'Régua',
    imageUrl: `${basePath}images/ruler.png`,
  },
  {
    id: 6,
    name: 'Tesoura',
    imageUrl: `${basePath}images/scissors.png`,
  },
  {
    id: 7,
    name: 'Cola',
    imageUrl: `${basePath}images/glue.png`,
  },
  {
    id: 8,
    name: 'Apontador',
    imageUrl: `${basePath}images/sharpener.png`,
  },
  {
    id: 9,
    name: 'Pincel',
    imageUrl: `${basePath}images/brush.png`,
  },
  {
    id: 10,
    name: 'Mochila',
    imageUrl: `${basePath}images/backpack.png`,
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