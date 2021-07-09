
import { useState, useEffect } from "react";
import { CardStateProps } from "../interfaces";

export const useCardStates = ({pokemons, addToMoves, resetMoves, userMoves, storeScore}: CardStateProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [scoreVisible, setScoreVisible] = useState<boolean>(false);

  //evaluate recently flipped cards 
  useEffect(()=>{
    //if cards match keep
    if (flippedCards.length === 2) {evaluate(flippedCards);};
  /*eslint-disable-next-line*/
  }, [flippedCards])

  useEffect(()=> {
    if(matchedCards.length > 1 && matchedCards.length === pokemons.length) {
      storeScore(userMoves);
      setTimeout(()=>{toggleScoreModal();}, 1500);
    }
  /*eslint-disable-next-line*/
  }, [matchedCards, pokemons.length]);

  
  //timeout to flip back cards if not matched
  let flipBack:any; 
  const cardFlip = () => {flipBack = setTimeout(()=>{setFlippedCards(()=>([]))},1800);};
  const noFlip = () => {clearTimeout(flipBack);};

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
    //add to flippedCards & add to moves
    else if (flippedCards.length === 1) {
      setFlippedCards((state)=>([...state, i]));
      addToMoves();
    } else {
      setFlippedCards(()=>([i]));
      addToMoves();
      noFlip();
    }
  }

  const clearCards = () => {
    const icon = document.querySelector(".reset")!.querySelector("span")!;
    icon.style.transform = "rotate(-360deg)";
    icon.ontransitionend = (()=>icon.style.transform= "rotate(0deg)");
    setFlippedCards(()=>[]);
    setMatchedCards(()=>[]);
    //reset moves
    resetMoves();
  }

  //toggle score modal
  const toggleScoreModal = () => {
    setScoreVisible(!scoreVisible);
  }

 


  return {flippedCards, matchedCards, handleClick, clearCards, toggleScoreModal, scoreVisible}

}
