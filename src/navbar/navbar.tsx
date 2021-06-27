import React from "react"
import { Modal } from "../modal/modal"
import { useModal } from "../modal/modal-hook"

export const Navbar = (): JSX.Element => {
  const {isVisible, toggleModal} = useModal();
  
  return (
    <nav>
      <div className="timer">1:00</div>
      <div className="reset"><span className="material-icons">restart_alt</span></div>
      <div className="menu" onClick={toggleModal}><span className="material-icons">settings</span></div>
      <Modal isVisible={isVisible} hideModal={toggleModal}/>
    </nav>

  )
}