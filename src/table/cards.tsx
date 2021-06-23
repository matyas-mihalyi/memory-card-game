import { Pokemon } from "./table"

interface CardsProps {
  mons: Pokemon[]
}

export const Cards = ({mons}: CardsProps): JSX.Element => {
  
  return (
    <div className="cards">
    {
      mons.map((pokemon) => (
        <div className="card-wrapper" key={pokemon.pokemonId}>
          <div className="card-inner">
            <div className="card-front">
              <img src={pokemon.sprite} alt="pokemon" />
            </div>
            <div className="card-back" />
          </div>
        </div>
      ))
    }    
    </div>
    )
}

