import React from 'react'
import { NavLink } from 'react-router-dom'
import "./HeroSection.css"

const HeroSection = (props) => {
  return (
    <div className='container'>
      <div className='grid-disp grid-two-col'>
        <div className="HeroScetionData">
            <h1>{props.stname}</h1>
          <p className='textdata'>Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.</p>
           <NavLink to={"/products"} ><button className='btnshow'>Show more</button></NavLink>
        </div>
        <div className="HeroScetionImg">
          <img src="./images/hero.jpg" ></img>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
