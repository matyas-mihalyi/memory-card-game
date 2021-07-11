import React from 'react';
import { Table } from './components/table';
import { Navbar } from './components/navbar'
import { useSettings } from './hooks/settings-hook';
import { useFetchMons } from './hooks/get-random-mons';
import { useCardStates } from './hooks/card-state';
import { useScore } from './hooks/score-hook';
import { SettingsModal } from './components/settings-modal';
import {ScoreModal} from './components/score-modal';

function App() {

  const { isVisible, toggleModal, getGen, getIds, monsToRender, numberOfCards, incrementCards, decrementCards, generation} = useSettings();
  const { pokemons, refreshPokemons } = useFetchMons(monsToRender);
  const { userMoves, addToMoves, resetMoves, getHighScore } = useScore(numberOfCards);
  const { storeScore } = useScore(numberOfCards);
  const { flippedCards, matchedCards, handleClick, clearCards, toggleScoreModal, scoreVisible } = useCardStates({pokemons, addToMoves, resetMoves, userMoves, storeScore});

  const clearAll = () => {
    getIds();
    refreshPokemons();
    resetMoves();
    clearCards();
  }

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
      clearAll={clearAll}
    />
    <SettingsModal 
      numberOfCards={numberOfCards}
      incrementCards={incrementCards}
      decrementCards={decrementCards}
      isVisible={isVisible} 
      toggleModal={toggleModal}
      getGen={getGen}
      generation={generation}
      clearAll={clearAll}
    />
    <ScoreModal 
      toggle={toggleScoreModal}
      isVisible={scoreVisible}
      score={userMoves}
      clearAll={clearAll}
      getHighScore={getHighScore}
    />
    </React.Fragment>
  );
}

export default App;
