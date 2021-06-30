export interface Pokemon {
  pokemonName: string;
  pokemonId: number;
  sprite: string;
}

export interface NavbarProps {
  isVisible: boolean;
  toggleModal: () => void;
  decrementCards: () => void;
  incrementCards:() => void;
  numberOfCards: number;
  refreshPokemons:(num: number) => void;
  clearCards:()=> void;
}

export interface ModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  decrementCards: () => void;
  incrementCards:() => void;
  numberOfCards: number;
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