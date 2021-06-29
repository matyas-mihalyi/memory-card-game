import { useState, useEffect, ReactElement } from "react";
import { Cards, } from "./cards";
import { pokemonIds, shuffle } from "../hooks/get-random-mons";
import { Pokemon, TableProps } from "../interfaces";
import { useNumberOfCards } from '../hooks/number-of-cards'

import React from "react";


//COMPONENT
export const Table = ({numberOfCards, cardsToRender}: TableProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  //evaluate recently flipped cards 
  useEffect(()=>{
    //if cards match keep
    if (flippedCards.length === 2) {evaluate(flippedCards);};
  }, [flippedCards])

  //timeout to flip back cards if not matched
  let flipBack:any; 
  const cardFlip = () => {flipBack = setTimeout(()=>{setFlippedCards(()=>([]))},1800);};
  const noFlip = () => {clearTimeout(flipBack);};

  const evaluate = (flippedCards: number[]):void => {
    const [a, b] = flippedCards;
    //if it's a match
    if (cardsToRender[a].pokemonId === cardsToRender[b].pokemonId) {
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
      {cardsToRender.length === numberOfCards
        ? <Cards 
            cardsToRender={cardsToRender}
            numberOfCards={numberOfCards}
            handleClick={handleClick}
            flippedCards={flippedCards}
            matchedCards={matchedCards}
          />
        : <div className="loading-message">Loading cards...</div>}
    </React.Fragment>
  )
}