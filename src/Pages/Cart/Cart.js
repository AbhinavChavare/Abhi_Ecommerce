import React from 'react'
import { useCartContext } from '../../Component/context/CartContext'
import "./Cart.css"
import CartItem from '../../Component/CartItem/CartItem'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const { cart, ClearCart, total_price, shipping } = useCartContext();


  if (cart.length < 1) {
    return (
      <div className='cart-Empty'>
        <h2>Cart is Empty</h2>

      </div>

    )
  }
  else {


    return (
      <div className='container'>

            <div className='cart-cont'>
          <h3 className='cart-wid-item'>Item</h3>
          <h3 className='cart-wid-it-rem hide'>Price</h3>
          <h3 className='cart-wid-it-rem'>Quantity</h3>
          <h3 className='cart-wid-it-rem hide'>SubTotal</h3>
          <h3 className='cart-wid-it-rem'>Remove</h3>
        </div>
        <hr />
        <div>
          {
            cart.map((curEle) => {
              return <CartItem key={curEle.id}  {...curEle} />
            })
          }
        </div>
        <div className='cart-disp-flex '>
          <NavLink to="/products">
            <button className='btnshow'>Shop more</button>
          </NavLink>
          <button className='btnshow' onClick={() => { ClearCart() }} >Clear cart</button>
        </div>
        <div className='cart-total-dflex'>
          <div className='cart-total-con'>
            <div className='cart-total-dflex-text'>
              <h4>SubTotal</h4>
              <h4>Rs {total_price}/-</h4>
            </div>
            <div className='cart-total-dflex-text'>
              <h4>Shipping</h4>
              <h4>Rs {(shipping / 500)}/-</h4>
            </div>
            <hr />
            <div className='cart-total-dflex-text'>
              <h4>Total</h4>
              <h4>Rs {total_price + (shipping / 500)}/-</h4></div>
          </div>
        </div>


      </div>
    )
  }
}

export default Cart
