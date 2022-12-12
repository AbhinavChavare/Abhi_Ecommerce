import React from 'react'
import { MdDelete } from "react-icons/md";

import AddCartToggle from '../AddCartToggle/AddCartToggle';
import { useCartContext } from '../context/CartContext';

const CartItem = ({ id, amount, stock, pname, price, image, color }) => {

    const { RemoveItem,Increment,Decrement } = useCartContext();

    // let [idamount, setamount] = useState(amount)
    // const Increment = () => {
    //     return (
    //         amount < stock ? setamount(idamount + 1) : stock
    //     )
    // }
    // const Decrement = () => {
    //     amount > 1 ? setamount(idamount - 1) : setamount(amount)
    // }
    // var amount = idamount

    return (
        <div>
            <div className='cart-cont '>
                <h3 className='main-it-cont'>
                    <div className='main-it-img'><img src={`${image}`} alt="Product Image"></img></div>
                    <div className='main-it-text'>
                        <div>{pname}</div>
                        <div ><button className='title-col-cart' style={{ backgroundColor: `${color}` }}
                        > </button>
                        </div>
                    </div>
                </h3>
                <h3 className='cart-wid-it-rem hide'>{price}</h3>
                <h3 className='cart-wid-it-rem h-text-center'> <AddCartToggle className="tog-hei-wid"
                    amount={amount} Increment={()=>Increment(id)} Decrement={()=>Decrement(id)} /></h3>
                <h3 className='cart-wid-it-rem hide'>{price * amount}</h3>
                <button className='cart-wid-it-rem icon-del' onClick={() => RemoveItem(id)} > <MdDelete /></button>
            </div>
            <hr />
          
        </div>

    )

}

export default CartItem
