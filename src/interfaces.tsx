export interface Pokemon {
  pokemonName: string;
  pokemonId: number;
  sprite: string;
}

export interface NavbarProps {
  toggleModal: () => void;
  refreshPokemons:() => void;
  clearCards:()=> void;
  userMoves: number;
}

export interface SettingsModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  decrementCards: () => void;
  incrementCards:() => void;
  numberOfCards: number;
  getGen: (str: string) => void;
  generation: string;
  clearAll: ()=> void;
}

export interface ScoreModalProps {
  toggle: () => void;
  isVisible: boolean;
  score: number;
  getHighScore: ()=> number;
  clearAll: ()=> void;
}

export interface TableProps {
  numberOfCards: any;
  cardsToRender: Pokemon[];
  handleClick: (i: number) => void;
  flippedCards: number[];
  matchedCards: number[];
}

export interface CardsProps {
  cardsToRender: Pokemon[];
  numberOfCards: number;
  handleClick: (i: number) => void;
  flippedCards: number[];
  matchedCards: number[];
}

export interface CardStateProps {
  pokemons: Pokemon[];
  addToMoves: ()=> void;
  resetMoves: ()=> void;
  userMoves: number;
  storeScore: (num: number)=> void;
}

export interface HighScore {
  numberOfCards: number;
  userScore: number;
}