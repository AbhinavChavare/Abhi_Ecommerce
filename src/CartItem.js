import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

import AddCartToggle from './AddCartToggle';
import { useCartContext } from './Component/context/CartContext';

const CartItem = ({ id, amount, stock, pname, price, image, color }) => {

    const { RemoveItem } = useCartContext();

    let [idamount, setamount] = useState(amount)
    const Increment = () => {
        return (
            amount < stock ? setamount(idamount + 1) : stock
        )
    }
    const Decrement = () => {
        amount > 1 ? setamount(idamount - 1) : setamount(amount)
    }
    var amount = idamount

    return (
        <div>
            <div className='cart-cont '>
                <h3 className='main-it-cont'>
                    <div className='main-it-img'><img src={`${image}`}></img></div>
                    <div className='main-it-text'>
                        <div>{pname}</div>
                        <div className='colcen'><button className='title-col' style={{ backgroundColor: `${color}` }}
                        > </button>
                        </div>
                    </div>
                </h3>
                <h3 className='cart-wid-it-rem hide'>{price}</h3>
                <h3 className='cart-wid-it-rem h-text-center'> <AddCartToggle className="tog-hei-wid"
                    amount={amount} Increment={Increment} Decrement={Decrement} /></h3>
                <h3 className='cart-wid-it-rem hide'>{price * amount}</h3>
                <button className='cart-wid-it-rem icon-del' onClick={() => RemoveItem(id)} > <MdDelete /></button>
            </div>
            <hr />
          
        </div>

    )

}

export default CartItem
