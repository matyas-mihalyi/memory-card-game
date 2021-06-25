import { useEffect } from "react";
import { useState } from "react"
import { Pokemon, CardsProps, CardState } from "./interfaces";


export const Cards = ({mons, numberOfCards}: CardsProps): JSX.Element => {

  // const checkCard = (i: number):string => {
  //   if (cards.cards !== undefined && cards.cards.length === numberOfCards && cards.cards[i].flipped ) {
  //     return "card-inner flipped"
  //   } else {
  //     return "card-inner"
  //   }
  // }

  return (
    <div className="cards">
    { 
      mons.map((pokemon, i) => 
        (
        <div className="card-wrapper" key={i}>  
          <div className="card-inner">
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

// export const useCardState = (mons: Pokemon[]) =>{
//   const [cardState, setCardState] = useState<CardState>({
//     cards: []
//   })

//   useEffect(()=>{
//     mons.forEach((mon, i)=> {
//       setCardState((state)=>({cards: [...state.cards, {id: i, pokemon: mon.pokemonId, flipped: false}]}))
//     })
//  }, [mons.length])
  

//   return {cardState}
// }