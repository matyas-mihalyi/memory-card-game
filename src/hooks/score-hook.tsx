import { useState } from "react"


export const useScore = () => {
  const [userMoves, setUserMoves] = useState<number>(0);
  
  const addToMoves = () => {
    setUserMoves((state)=> (state + 1));
    console.log(userMoves);
  }
  
  const resetMoves = () => {
    setUserMoves(() => 0);
  }

  return { userMoves, addToMoves, resetMoves }
}