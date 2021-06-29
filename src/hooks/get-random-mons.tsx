import { Pokemon } from "../interfaces";
import { useState, useEffect } from "react";
import { CardsProps } from "../interfaces";

//source for shuffling algorhythm: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
export const shuffle = (array: Pokemon[]|number[]) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const KantoIds = (): number[] => {
  const arr: number[] = new Array(150);
  for (let i = 0; i < arr.length; i++){   //based on https://tutorial.eyehunts.com/js/javascript-fill-array-with-incrementing-numbers-integer-example-code/
    arr[i] =i+1;
  }
  shuffle(arr)
  return arr
}

//get the first n number of IDs based on number of cards settings
export const pokemonIds = (num: number): number[] => {
  return KantoIds().slice(0, num/2);
}


//CUSTOM HOOK FOR FETCHING POKEMON DATA

export const useFetchMons = (num: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); 

  const pokemonsToFetch = pokemonIds(num);

  
  useEffect(()=> {
    let allCards: Pokemon[] = [];
    pokemonsToFetch.forEach((id, i) => {
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
        if (allmons.length === pokemonsToFetch.length *2) {
          allmons.sort(()=> Math.random() - 0.5);
          setPokemons(() => (allmons));
        }
      })
      .catch((error)=> console.log(error));
    });
    
  }, [num]);
  return  { pokemons } 
}