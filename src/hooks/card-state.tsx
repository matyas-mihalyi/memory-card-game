
import { useState, useEffect } from "react";
import { Pokemon } from "../interfaces";

export const useCardStates = (cardsToRender: Pokemon[]) => {
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

  const clearCards = () => {
    const icon = document.querySelector(".reset")!.querySelector("span")!;
    icon.style.transform = "rotate(-360deg)";
    icon.ontransitionend = (()=>icon.style.transform= "rotate(0deg)")
    setFlippedCards(()=>[])
    setMatchedCards(()=>[])
  }

  return {flippedCards, matchedCards, handleClick, clearCards}

}

