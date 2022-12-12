import React from 'react'
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import "./AddCartToggle.css"



const AddCartToggle = ({ amount, Increment, Decrement }) => {


  return (
    <div>
      <div className='cart-toggle-flex'  >

        <button className='cart-size cart-col'
          onClick={() => Decrement()}> <GrFormSubtract /></button>
        <h1 className='cart-size'>{amount} </h1>
        <button className='cart-size cart-col'
          onClick={() => Increment()}>
          <GrFormAdd /></button>
      </div>
    </div>
  )
}

export default AddCartToggle
