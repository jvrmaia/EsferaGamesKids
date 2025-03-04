export interface Card {
  id: number;
  imageUrl: string;
  name: string;
  flipped: boolean;
  matched: boolean;
}

export interface Player {
  name: string;
  time: number; // tempo em segundos
} 