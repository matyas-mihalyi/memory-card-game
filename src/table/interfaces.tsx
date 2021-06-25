


export interface Pokemon {
  pokemonName: string;
  pokemonId: number;
  sprite: string;
}

export interface CardsProps {
  mons: Pokemon[];
  // cards: {"id": number, "pokemon": number, "flipped": boolean}[];
  // cards: any;
  numberOfCards: number;
  // flipCard: any;
  // checkCard: any;
  // onClick: any;
}

export interface CardState {

}
