import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"

const Header = () => {
  return (
    <div className='MainHeader'>
     <NavLink to="/">
      {/* <img src="./images/logo.png" alt="No image "/> */}
      <h1 className='disphead'>ABC</h1>
      </NavLink>
      <Nav/>
    </div>
  )
}

export default Header
