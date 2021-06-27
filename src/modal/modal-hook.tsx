//from https://medium.com/swlh/building-modals-in-react-64d92591f4b

import { useEffect } from "react";
import { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  function toggleModal() {
    setIsVisible(!isVisible);
  }

  return {
    isVisible,
    toggleModal,
  }
};

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

