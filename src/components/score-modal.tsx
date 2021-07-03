import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ScoreModalProps } from '../interfaces';

export  const ScoreModal = ({toggle, isVisible, score, refreshPokemons, clearCards, resetMoves}: ScoreModalProps) => {

  return isVisible
  ? ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="settings-container">
        <h3>Congratulations!</h3>
            <p>You got all the pairs in</p>
            <h4>{score}</h4>
            <p>moves.</p>
            <br />
            <button onClick={()=> {
              toggle();
              refreshPokemons();
              clearCards();
              resetMoves();
            }}>OK</button>
        </div>
      </div>, document.querySelector("#modal")!
    )
  : null;
}
