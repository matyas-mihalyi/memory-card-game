import React from "react"
import { ModalProps } from "../interfaces"
import { Modal } from "./modal"
import { useModal } from "../hooks/modal-hook"

export const Navbar = ({isVisible, toggleModal, numberOfCards, incrementCards, decrementCards}: ModalProps): JSX.Element => {
  
  return (
    <nav>
      <div className="timer">1:00</div>
      <div className="reset"><span className="material-icons">restart_alt</span></div>
      <div className="menu" onClick={toggleModal}><span className="material-icons">settings</span></div>
      <Modal isVisible={isVisible} toggleModal={toggleModal} numberOfCards={numberOfCards} incrementCards={incrementCards} decrementCards={decrementCards}/>
    </nav>

  )
}