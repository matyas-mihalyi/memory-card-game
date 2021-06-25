import { useState, useEffect } from "react";
import { Pokemon, CardState } from "./interfaces";


const KantoIds = (): number[] => {
  const arr: number[] = new Array(150);
  for (let i = 0; i < arr.length; i++){   //based on https://tutorial.eyehunts.com/js/javascript-fill-array-with-incrementing-numbers-integer-example-code/
    arr[i] =i+1;
  }
  arr.sort(()=> Math.random() - 0.5); //might not need it, or only need it here. we'll see
  return arr
}

//get the first n number of IDs based on number of cards settings
export const pokemonIds = (num: number): number[] => {
  return KantoIds().slice(0, num/2);
}


//CUSTOM HOOK FOR FETCHING POKEMON DATA

export const useFetchMons = (numArr: number[]) => {
  const [pokemons, setPokemons] = useState<any>({pokemons: []}); 
  const [cardState, setCardState] = useState<CardState>({
        cards: []
      })

  useEffect(()=> {
    let allCards: Pokemon[] = [];
    numArr.forEach((id, i) => {
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
        if (allmons.length === numArr.length *2) {
          allmons.sort(()=> Math.random() - 0.5);
          setPokemons(() => ({pokemons: allmons}));
        }
      })
      .catch((error)=> console.log(error));
    });
    
  }, [numArr]);

  return  { pokemons, cardState } 
}