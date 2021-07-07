import { useState } from "react"
import { HighScore } from "../interfaces";


export const useScore = (numberOfCards: number) => {
  const [userMoves, setUserMoves] = useState<number>(0);
  const addToMoves = () => {
    setUserMoves((state)=> (state + 1));
    console.log(userMoves);
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
        console.log("no record with this many cards")
        localStorage.setItem("Highscores",  JSON.stringify(highScores))
        console.log(highScores)
        //if there is a record for that num of cards
      } else if (highScores[numberOfCards] !== undefined) {
        console.log(highScores)
        console.log("there is already a record with this many cards")
        let storedRecord = highScores[numberOfCards];
        //if the score is lower remove the previous score from the array and insert the new one    
        if (storedRecord > num) {
          console.log("this is a new record")
          //add current score
          highScores[numberOfCards] = num;
          //add to localstorage
          localStorage.setItem("Highscores",  JSON.stringify(highScores))
        }    
      }
      //if there is no previous record
    } else {
      
      console.log("the highscores object was empty")
      highScores[numberOfCards] = num;
      localStorage.setItem("Highscores", JSON.stringify(highScores));
      console.log(highScores)
    }

  }

  const getHighScore = (): number => {
    let highScore: any = localStorage.getItem("Highscores");
    highScore = JSON.parse(highScore);
    console.log(highScore)
    return highScore[numberOfCards];
  }

  return { userMoves, addToMoves, resetMoves, storeScore, getHighScore }
}