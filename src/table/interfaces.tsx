


export interface Pokemon {
  pokemonName: string;
  pokemonId: number;
  sprite: string;
}

export interface CardsProps {
  mons: Pokemon[];
  numberOfCards: number;
  handleClick: (i: number) => void;
  flippedCards: flipCardState[];
  matchedCards: number[];
}

export interface CardState {

}

export interface flipCardState {
  id: number; 
  pokemonId: number
}
