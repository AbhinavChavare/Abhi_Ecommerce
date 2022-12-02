import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext= createContext();

const getCartData=()=>{
    let localStrData=localStorage.getItem("AbhiCart")
if(localStrData===[]){
    return []
}
else{
    return JSON.parse(localStrData)
}
}

const initialState={
    cart:getCartData(),
    total_item:"",
    total_price:"",
    shipping:50000,
}

const CartContextProvider=({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initialState)
    
    // state.cart.map((elem)=>{
    // console.log(elem.pname)
    
    // })

const AddToCartMain=({id,color,amount,product})=>{
return   dispatch({type:"SET_ADD_TO_CART",payload:{id,color,amount,product}})
}

const RemoveItem=(id)=>{
    return dispatch ({type:"SET_REMOVE_ITEM",payload:id})
}

const ClearCart=()=>{
    return dispatch({type:"SET_CLEAR_CART"})
}


useEffect(()=>{
    dispatch({type:"SET_CART_TOTAL"})
return localStorage.setItem("AbhiCart",JSON.stringify(state.cart))
},[state.cart])


return <CartContext.Provider value={{...state, AddToCartMain,RemoveItem,ClearCart} }>
    {children}
</CartContext.Provider>

}

const useCartContext=()=>{
   return useContext(CartContext)
}

export {CartContext,CartContextProvider,useCartContext }