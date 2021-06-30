import React from "react"
import { NavbarProps } from "../interfaces"
import { Modal } from "./modal"

export const Navbar = ({isVisible, toggleModal, numberOfCards, incrementCards, decrementCards, refreshPokemons, clearCards}: NavbarProps): JSX.Element => {
  
  return (
    <nav>
      <div className="timer">1:00</div>
      <div className="reset" onClick={()=>{clearCards(); refreshPokemons(numberOfCards)}}><span className="material-icons">restart_alt</span></div>
      <div className="menu" onClick={toggleModal}><span className="material-icons">settings</span></div>
      <Modal isVisible={isVisible} toggleModal={toggleModal} numberOfCards={numberOfCards} incrementCards={incrementCards} decrementCards={decrementCards}/>
    </nav>

  )
}