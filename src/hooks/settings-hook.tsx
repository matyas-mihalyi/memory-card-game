//from https://medium.com/swlh/building-modals-in-react-64d92591f4b

import { useState, useEffect } from "react";
import { shuffle } from "./get-random-mons";




export const useSettings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [monsToRender, setMonsToRender] = useState<number[]>([]);
  const [numberOfCards, setNumberOfCards] = useState<number>(12);
  const [generation, setGeneration] = useState<string>("1,151");

  
  const toggleModal = () => {
    setIsVisible(!isVisible);
  }
  
  const getGen = (str:string) => {
    setGeneration(str)
  }
  
  const getIds = () => {
    let [a, b]: any = generation.split(",");
    a = parseInt(a);
    b = parseInt(b);
    const arr: number[] = new Array(b - a + 1);
    for (let i = 0; i < arr.length; i++){   //based on https://tutorial.eyehunts.com/js/javascript-fill-array-with-incrementing-numbers-integer-example-code/
      arr[i] = a + i;
    }
    shuffle(arr);
    const selectedMons = arr.slice(0, numberOfCards/2);
    setMonsToRender(()=>(selectedMons));
  } 
  
  //eslint-disable-next-line
  useEffect(()=> {getIds()}, [numberOfCards, generation]);
  
  //increment & decrement number of cards
  
  const incrementCards = () => {
    if (numberOfCards < 28) {
      setNumberOfCards((state)=>(state+4));
    }
  }
  
  const decrementCards = () => {
    if (numberOfCards > 4) {
      setNumberOfCards((state)=>(state-4));
    }
  }
  
  
  return {
    numberOfCards,
    incrementCards,
    decrementCards,
    isVisible,
    toggleModal,
    getGen,
    getIds,
    generation,
    monsToRender,
  }
};



