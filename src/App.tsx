import React from 'react';
import { Table } from './components/table';
import { Navbar } from './components/navbar'
import { useNumberOfCards } from './hooks/number-of-cards'
import { useModal } from './hooks/settings-hook';
import { useFetchMons } from './hooks/get-random-mons';
import { useCardStates } from './hooks/card-state';
import { useScore } from './hooks/score-hook';
import { SettingsModal } from './components/settings-modal';
import {ScoreModal} from './components/score-modal';

function App() {

  const { isVisible, toggleModal} = useModal();
  const { numberOfCards, incrementCards, decrementCards } = useNumberOfCards();
  const { pokemons, refreshPokemons } = useFetchMons(numberOfCards);
  const { userMoves, addToMoves, resetMoves, getHighScore } = useScore(numberOfCards);
  const { storeScore } = useScore(numberOfCards);
  const { flippedCards, matchedCards, handleClick, clearCards, toggleScoreModal, scoreVisible } = useCardStates({pokemons, addToMoves, resetMoves, userMoves, numberOfCards, storeScore});


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
      toggleModal={toggleModal}
      userMoves={userMoves}
      refreshPokemons={refreshPokemons}
      clearCards={clearCards}
    />
    <SettingsModal 
      numberOfCards={numberOfCards}
      incrementCards={incrementCards}
      decrementCards={decrementCards}
      isVisible={isVisible} 
      toggleModal={toggleModal}
    />
    <ScoreModal 
      toggle={toggleScoreModal}
      isVisible={scoreVisible}
      score={userMoves}
      clearCards={clearCards}
      resetMoves={resetMoves}
      refreshPokemons={refreshPokemons}
      getHighScore={getHighScore}
    />
    </React.Fragment>
  );
}

export default App;
