import React from 'react';
import { Table } from './components/table';
import { Navbar } from './components/navbar'
import { useNumberOfCards } from './hooks/number-of-cards'
import { useModal } from './hooks/modal-hook';
import { useFetchMons } from './hooks/get-random-mons';
import { useCardStates } from './hooks/card-state';

function App() {

  const { isVisible, toggleModal} = useModal();
  const { numberOfCards, incrementCards, decrementCards } = useNumberOfCards();
  const { pokemons, refreshPokemons } = useFetchMons(numberOfCards);
  const { flippedCards, matchedCards, handleClick, clearCards } = useCardStates(pokemons)

  return (
    <React.Fragment>
    <Table 
      //number of cards
      numberOfCards={numberOfCards}
      cardsToRender={pokemons}
      handleClick={handleClick}
      flippedCards={flippedCards}
      matchedCards={matchedCards}
    />
    <Navbar 
      //modal
      isVisible={isVisible} 
      toggleModal={toggleModal}
      //number of cards
      numberOfCards={numberOfCards}
      incrementCards={incrementCards}
      decrementCards={decrementCards}
      //refresh cards
      refreshPokemons={refreshPokemons}
      clearCards={clearCards}
    />
    </React.Fragment>
  );
}

export default App;
