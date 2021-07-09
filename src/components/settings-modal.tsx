import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SettingsModalProps } from '../interfaces'

  
export  const SettingsModal = ({ isVisible, toggleModal, decrementCards, incrementCards, numberOfCards, getGen, generation, clearAll}: SettingsModalProps ) => {

  return isVisible
  ? ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="container">
            <h3>Number of Pokémons</h3>
          <div className="number-of-cards">
            <span onClick={()=>{decrementCards(); clearAll()}} className="material-icons">remove</span>
            <span className="number-of-mons">{numberOfCards.toString()}</span>
            <span onClick={()=>{incrementCards(); clearAll()}} className="material-icons">add</span>
          </div>
          <h3>Choose your region</h3>
            <select name="region-picker" id="region" onChange={(e)=>{getGen(e.target.value); clearAll()}} defaultValue={generation}>
              <option value="1,151">Kanto</option>
              <option value="152,251">Johto</option>
              <option value="252,386">Hoenn</option>
              <option value="387,493">Sinnoh</option>
              <option value="494,649">Unova</option>
              <option value="650,721">Kalos</option>
              <option value="722, 809">Alola</option>
              <option value="810,898">Galar</option>
            </select>

            <button onClick={toggleModal}>OK</button>
        </div>
      </div>, document.querySelector("#modal")!
    )
  : null;
}


