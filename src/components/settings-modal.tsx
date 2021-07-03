import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SettingsModalProps } from '../interfaces'

  
export  const SettingsModal = ({ isVisible, toggleModal, decrementCards, incrementCards, numberOfCards}: SettingsModalProps ) => {

  return isVisible
  ? ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="settings-container">
            <h3>Number of Pokémons</h3>
          <div className="number-of-cards">
            <span onClick={()=>decrementCards()} className="material-icons">remove</span>
            <span className="number-of-mons">{numberOfCards.toString()}</span>
            <span onClick={()=>incrementCards()} className="material-icons">add</span>
          </div>

            <button onClick={toggleModal}>OK</button>
        </div>
      </div>, document.querySelector("#modal")!
    )
  : null;
}


