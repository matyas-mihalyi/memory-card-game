import { useState, useEffect } from "react";

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
  const [pokemons, setPokemons] = useState<any>({pokemons: []}) 
  
  useEffect(()=> {
    numArr.forEach((id) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(numArr)
        const pokemon = {
          pokemonId: data.id,
          sprite: `${data.sprites.front_default}`
        }          
        setPokemons((state: any) => ({pokemons: [...state.pokemons, pokemon]}))
      });
    })
    //get mons and push them to state
  }, [numArr]);

  return  { pokemons } 
}