import React, { useState } from 'react'
import "./AddToCart.css"
import { TiTick } from "react-icons/ti";
import AddCartToggle from './AddCartToggle';
import { NavLink } from 'react-router-dom';

const AddToCart = ({product}) => {
    const {id,colors,stock}=product
    console.log(product)

const [color,setcolor]=useState(colors[0])


const [amount,setamount]=useState(1)

const Increment=()=>{
    return(
        amount<stock?setamount(amount+1):stock
        )
    }
    const Decrement=()=>{
        amount>1?setamount(amount-1):setamount(1)
    }
 
  return (
    <div >
  { <div className='colcen'> <strong>Colors:</strong>
    {colors.map((ele,ind)=> 
    <button   className='title-col' 
    style={ {backgroundColor:`${ele}`}} 
    key={ind} 
    onClick={()=>setcolor(ele)}
    >{color===ele?<TiTick className='ic-col'/>:null} </button>
    )}
    </div>
  }

  <AddCartToggle 
  amount={amount} Increment={Increment} Decrement={Decrement} />

<NavLink to="/cart"  onClick={()=>AddToCartMain({...product})}>
  <button className='btnshow'>Add To Cart</button>
  </NavLink>
    </div>
  )
}

export default AddToCart
