import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ScoreModalProps } from '../interfaces';

export  const ScoreModal = ({toggle, isVisible, score, getHighScore, clearAll}: ScoreModalProps) => {

  return isVisible
  ? ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="container">
        <h3>Congratulations!</h3>
        <div className="message-wrapper">
            <p>You got all the pairs in</p>
            <strong>{score}</strong>
            <p>moves.</p>
            <br />
            <p>Your personal best is <b>{getHighScore()}</b> moves</p>
        </div>
            <button 
              onClick={()=> {
                toggle();
                clearAll();
              }
            }>OK</button>
        </div>
      </div>, document.querySelector("#modal")!
    )
  : null;
}
