import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useModal, useNumberOfCards } from './modal-hook'
import { ModalProps } from '../interfaces'
import { useState } from 'react'

  
export  const Modal = ({ isVisible, hideModal}: ModalProps ) => {
  const { numberOfCards, incrementCards, decrementCards } = useNumberOfCards();


  return isVisible
  ? ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="settings-container">
          <h2>Number of Pokémons</h2>
            <span onClick={()=>decrementCards()} className="material-icons">remove</span>
            <span className="number-of-mons">{numberOfCards.toString()}</span>
            <span onClick={()=>incrementCards()} className="material-icons">add</span>
            <button onClick={hideModal}>OK</button>
        </div>
      </div>, document.querySelector("#modal")!
    )
  : null;
}


