import { useState } from "react";

export const useNumberOfCards = () => {
  const [numberOfCards, setNumberOfCards] = useState<number>(8)

  //increment & decrement number of cards

  const incrementCards = () => {
    setNumberOfCards((state)=>(state+2));
  }
  
  const decrementCards = () => {
    setNumberOfCards((state)=>(state-2));
  }
  
  return { numberOfCards, incrementCards, decrementCards, }
}