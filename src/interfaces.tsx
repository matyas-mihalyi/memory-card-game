export interface Pokemon {
  pokemonName: string;
  pokemonId: number;
  sprite: string;
}

export interface CardsProps {
  mons: Pokemon[];
  numberOfCards: number;
  handleClick: (i: number) => void;
  flippedCards: number[];
  matchedCards: number[];
}

export interface ModalProps {
  isVisible: boolean;
  hideModal: () => void;
}
