import { useEffect } from "react";
import { useState } from "react"
import { Pokemon, CardsProps, flipCardState } from "./interfaces";


export const Cards = ({mons, numberOfCards, handleClick, flippedCards, matchedCards}: CardsProps): JSX.Element => {


  return (
    <div className="cards">
    { 
      mons.map((pokemon, i) => 
        (
        <div className="card-wrapper" key={i} onClick={()=>handleClick(i)}>  
          <div className={
            flippedCards.some((card: flipCardState)=> card.id === i) || matchedCards.some((card: number)=> card === i) 
            ? "card-inner flipped"
            : "card-inner"
            }>
            <div className="card-front">
              <img src={pokemon.sprite} alt={pokemon.pokemonName} />
            </div>
            <div className="card-back" />
          </div>
        </div>
      ))
    }    
    </div>
    )
}
