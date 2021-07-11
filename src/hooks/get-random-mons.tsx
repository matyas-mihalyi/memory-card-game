import { Pokemon } from "../interfaces";
import { useState, useEffect } from "react";

//source for shuffling algorhythm: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
export const shuffle = (array: Pokemon[]|number[]) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}



//CUSTOM HOOK FOR FETCHING POKEMON DATA

export const useFetchMons = (monsToRender: number[]) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); 


  const refreshPokemons = () => {
    let allCards: Pokemon[] = [];
    monsToRender.forEach((id, i) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then((data) => {
        const pokemon = {
          pokemonName: data.name+"_1",
          pokemonId: data.id,
          sprite: `${data.sprites.front_default}`,
        }
        const pokemonCopy = {
          pokemonName: data.name+"_2",
          pokemonId: data.id,
          sprite: `${data.sprites.front_default}`
        }
        allCards.push(pokemon, pokemonCopy); 
        return allCards;
      })
      .then((allmons)=> {
        if (allmons.length === monsToRender.length *2) {
          allmons.sort(()=> Math.random() - 0.5);
          setPokemons(() => (allmons));
        }
      })
      .catch((error)=> console.log(error));
    });
  }

  /*eslint-disable-next-line*/
  useEffect(()=> {refreshPokemons()}, [monsToRender]);
  
  return  { pokemons, refreshPokemons } 
}