import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useCartContext } from '../context/CartContext';

const Nav = () => {

    const [act, setact] = useState(true)
    const [navhs, setnavhs] = useState("")
    const{total_item}=useCartContext()

    const getnav = () => {
        setact(false)
        setnavhs("navli-hs")
    }
    const hidenav = () => {
        setact(true)
        setnavhs("")
    }

    return (
        <div className={`navcon`}>

            <div className={`navcon-li ${navhs}`} >
                <li><NavLink onClick={() => { hidenav() }} className={"hov"} to="/" >Home</NavLink></li>

                <li><NavLink onClick={() => { hidenav() }} className={"hov"} to="/about"  > About</NavLink></li>
                <li><NavLink onClick={() => { hidenav() }} className={"hov"} to="/products" >Products</NavLink></li>

                <li><NavLink onClick={() => { hidenav() }} className={"hov"} to="/contact" >Contact</NavLink></li>
            

               
               {/* <li>                 
                <button className=' auth-loglbtn' >Login</button>
                </li>
                <li>
                <button className='auth-loglbtn'>Log Out</button>
                </li> */}
                
                <li><NavLink onClick={() => { hidenav() }} className="cartsize hov cart-abs " to="/cart"><AiOutlineShoppingCart /><span className='cart-total'>{total_item}</span></NavLink> </li>
            </div>

            <div className='mobile-navbar-btn'>
                <div onClick={() => { getnav() }} className={`mobile-nav-icon ${act ? " " : "btn"}`} ><FaBars /> </div>
                <div onClick={() => { hidenav() }} className={`mobile-nav-icon ${act ? "btn" : " "}`}><FaTimes /> </div>
            </div>
        </div>
    )
}

export default Nav
