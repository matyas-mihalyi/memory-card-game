import { Cards, } from "./cards";
import { TableProps } from "../interfaces";
import React from "react";


//COMPONENT
export const Table = ({numberOfCards, cardsToRender, handleClick, flippedCards, matchedCards }: TableProps) => {

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