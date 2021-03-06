import React from "react"
import { NavbarProps } from "../interfaces"

export const Navbar = ({ toggleModal, userMoves, clearAll }: NavbarProps): JSX.Element => {
  
  return (
    <nav>
      <div className="score"><span className="label">Moves:</span><span className="moves">{userMoves}</span></div>
      <div className="reset" onClick={()=> clearAll()}><span className="material-icons">restart_alt</span></div>
      <div className="menu" onClick={toggleModal}><span className="material-icons">settings</span></div>
    </nav>

  )
}