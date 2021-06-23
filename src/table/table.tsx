import React from "react";
import { Cards } from "./cards";
import { useFetchMons, pokemonIds } from "./get-random-mons";

export interface Pokemon {
  pokemonId: number;
  sprite: string;
}


let numberOfCards: number = 8;  

const monsToRender = pokemonIds(numberOfCards);

//COMPONENT
export const Table = () => {

  const {pokemons} = useFetchMons(monsToRender);
  
  return (
    <div>
      <h2>Table</h2>
      {pokemons.pokemons.length === numberOfCards/2 ? <Cards mons={pokemons.pokemons}/>: console.log(`pokemons state ${pokemons.pokemons.length} is not equal to cards/2 ${numberOfCards/2}`)}
    </div>
  )
}