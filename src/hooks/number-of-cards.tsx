import { useState } from "react";

export const useNumberOfCards = () => {
  const [numberOfCards, setNumberOfCards] = useState<number>(12)

  //increment & decrement number of cards

  const incrementCards = () => {
    if (numberOfCards < 28) {
      setNumberOfCards((state)=>(state+2));
    }
  }
  
  const decrementCards = () => {
    if (numberOfCards > 4) {
      setNumberOfCards((state)=>(state-2));
    }
  }
  
  return { numberOfCards, incrementCards, decrementCards, }
}