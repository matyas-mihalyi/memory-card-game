import { useState } from "react"

export const useScore = (numberOfCards: number) => {
  const [userMoves, setUserMoves] = useState<number>(0);
  const addToMoves = () => {
    setUserMoves((state)=> (state + 1));
  }
  
  const resetMoves = () => {
    setUserMoves(() => 0);
  }
  
  //store recors in local storage
  const storeScore = (num: number) => {    
    let highScores: any = {};

    //if highscores is not empty assign it to
    if (localStorage.getItem("Highscores") !== null) {
      highScores = (localStorage.getItem("Highscores"));
      highScores = JSON.parse(highScores);
      //if no record is stored with this many cards
      if (highScores[numberOfCards] === undefined) {
        highScores[numberOfCards] = num;
        localStorage.setItem("Highscores",  JSON.stringify(highScores))
        //if there is a record for that num of cards
      } else if (highScores[numberOfCards] !== undefined) {
        let storedRecord = highScores[numberOfCards];
        //if the score is lower remove the previous score from the array and insert the new one    
        if (storedRecord > num) {
          //add current score
          highScores[numberOfCards] = num;
          //add to localstorage
          localStorage.setItem("Highscores",  JSON.stringify(highScores))
        }    
      }
      //if there is no previous record
    } else {
      highScores[numberOfCards] = num;
      localStorage.setItem("Highscores", JSON.stringify(highScores));
    }

  }

  const getHighScore = (): number => {
    let highScore: any = localStorage.getItem("Highscores");
    highScore = JSON.parse(highScore);
    return highScore[numberOfCards];
  }

  return { userMoves, addToMoves, resetMoves, storeScore, getHighScore }
}