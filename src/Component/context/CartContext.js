import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const getCartData = () => {
    let localStrData = localStorage.getItem("AbhiCart")

    const parseData = JSON.parse(localStrData)
    if (!Array.isArray(parseData)) return [];
    return parseData;


}

const initialState = {
    cart: getCartData(),
    total_item: "",
    total_price: "",
    shipping: 50000,
}

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // state.cart.map((elem)=>{
    // console.log(elem.pname)

    // })

    const AddToCartMain = ({ id, color, amount, product }) => {
        return dispatch({ type: "SET_ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const Increment = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const Decrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }

    const RemoveItem = (id) => {
        return dispatch({ type: "SET_REMOVE_ITEM", payload: id })
    }


    const ClearCart = () => {
        return dispatch({ type: "SET_CLEAR_CART" })
    }


    useEffect(() => {
        dispatch({ type: "SET_CART_TOTAL" })
        return localStorage.setItem("AbhiCart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, AddToCartMain, RemoveItem, ClearCart, Increment, Decrement }}>
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartContext }