import React from 'react';
import { Table } from './components/table';
import { Navbar } from './components/navbar'
import { useNumberOfCards } from './hooks/number-of-cards'
import { useModal } from './hooks/modal-hook';
import { useFetchMons } from './hooks/get-random-mons';

function App() {

  const { isVisible, toggleModal} = useModal();
  const { numberOfCards, incrementCards, decrementCards } = useNumberOfCards();
  const { pokemons } = useFetchMons(numberOfCards);

  return (
    <div className="container">
    <Table 
      //number of cards
      numberOfCards={numberOfCards}
      cardsToRender={pokemons}
      />
    <Navbar 
      //modal
      isVisible={isVisible} 
      toggleModal={toggleModal}
      //number of cards
      numberOfCards={numberOfCards}
      incrementCards={incrementCards}
      decrementCards={decrementCards}
      />
    </div>
  );
}

export default App;
