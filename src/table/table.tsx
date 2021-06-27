import { useState, useEffect, ReactElement } from "react";
import { Cards, } from "./cards";
import { pokemonIds, shuffle } from "./get-random-mons";
import { Pokemon } from "../interfaces";
import { useNumberOfCards } from "../modal/modal-hook";
import React from "react";


//COMPONENT
export const Table = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); 
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const {numberOfCards} = useNumberOfCards();

  let monsToRender = pokemonIds(numberOfCards);
  useEffect(()=>{
    monsToRender = pokemonIds(numberOfCards);
  }, [numberOfCards])
  //fetch pokemons
  useEffect(()=> {
    let allCards: Pokemon[] = [];
    monsToRender.forEach((id) => {
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
          shuffle(allmons);
          setPokemons(() => (allmons));
        }
      })
      .catch((error)=> console.log(error));
    });
    
  }, [numberOfCards]);

  
  //evaluate recently flipped cards 
  useEffect(()=>{
    //if cards match keep
    if (flippedCards.length === 2) {evaluate(flippedCards);};
  }, [flippedCards])

  //timeout to flip back cards if not matched
  let flipBack:any; 
  const cardFlip = () => {flipBack = setTimeout(()=>{setFlippedCards(()=>([]))},1800); console.log("timeout set")};
  const noFlip = () => {clearTimeout(flipBack); console.log("timeout cleared")};

  const evaluate = (flippedCards: number[]):void => {
    const [a, b] = flippedCards;
    //if it's a match
    if (pokemons[a].pokemonId === pokemons[b].pokemonId) {
      setMatchedCards((state)=>([...state, a, b]));
    } else {
      cardFlip();
    }
  } 

  //handleclick
  const handleClick = (i: number):void => {
    //check if it's already flipped
    if (flippedCards.some((id)=> id === i) || matchedCards.some((id)=> id === i)) {
      return;
    }
    //add to flippedCards
    else if (flippedCards.length === 1) {
      setFlippedCards((state)=>([...state, i]));
    } else {
      setFlippedCards(()=>([i]));
      noFlip()
    }
  }




  return (
    <React.Fragment>
      {pokemons.length === numberOfCards
        ? <Cards 
        mons={pokemons} 
        numberOfCards={numberOfCards}
        handleClick={handleClick}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        />
        : <div className="loading-message">Loading...</div>}
    </React.Fragment>
  )
}