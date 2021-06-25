import { useState, useEffect } from "react";
import { Cards, } from "./cards";
// import { useFetchMons, pokemonIds } from "./get-random-mons";
import { pokemonIds } from "./get-random-mons";
import { CardState, Pokemon } from "./interfaces";

let numberOfCards: number = 8;  
const monsToRender = pokemonIds(numberOfCards);


//COMPONENT
export const Table = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); 
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // const [cardState, setCardState] = useState<CardState>({cards: []});

  useEffect(()=> {
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
    
  }, [monsToRender]);

  
  return (
    <div>
      {pokemons.length === numberOfCards 
        ? <Cards 
            mons={pokemons} 
            numberOfCards={numberOfCards}
          />
        : <div className="loading-message">Loading...</div>}
    </div>
  )
}