

const CartReducer = (state, action) => {


    if (action.type === "SET_ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let existItem = state.cart.find((curItem) => {
            return curItem.id === id + color
        })

        if (existItem) {
            //checking stock and cart item.
            const updateProducts = state.cart.map((curele) => {
                if (curele.id === id + color) {
                    let newAmount = curele.amount + amount;

                    if (newAmount >= curele.stock) {
                        newAmount = curele.stock
                    }
                    return {
                        ...curele,
                        amount: newAmount,
                    }

                }
                else {
                    return {
                        ...curele,
                    }
                }
            })
            return {
                ...state,
                cart: updateProducts
            }

        }
        else {
            let cartProducts;
            cartProducts = {
                id: id + color,
                pname: product.name,
                color: color,
                amount,
                price: product.price,
                image: product.image[0].url,
                stock: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProducts],
            }
        }
    }

    if (action.type === "SET_REMOVE_ITEM") {
        const cartProducts = state.cart.filter((ele) => {
            return (ele.id !== action.payload)
        })
        return {
            cart: [...cartProducts]
        }
    }

    if (action.type === "SET_CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "SET_INCREMENT") {
        let updateData = state.cart.map((curele) => {
            if (curele.id === action.payload) {
                let newamount = curele.amount + 1
                if (newamount >= curele.stock) {
                     newamount = curele.stock
                }
                return {
                    ...curele,
                    amount: newamount
                }
            }
            else {
                return {
                    ...curele
                }
            }
        })
        return {
            ...state,
            cart: updateData
        }
    }
    if (action.type === "SET_DECREMENT") {
        let updateData = state.cart.map((curele) => {
            if (curele.id === action.payload) {
                let newamount = curele.amount - 1
                if (newamount <= 1) {
                    newamount = 1
               }
                return {
                    ...curele,
                    amount: newamount
                }
            }
            else {
                return {
                    ...curele
                }
            }
        })
        return {
            ...state,
            cart: updateData
        }
    }




    if (action.type === "SET_CART_TOTAL") {
   
        let updateCartItem = state.cart.reduce((acc, curele) => {
            return acc = acc + curele.amount
        }, 0)
        let updateTotalPrice = state.cart.reduce((acc, curele) => {
            return acc = acc + (curele.amount * curele.price)
        }, 0)
        console.log(updateTotalPrice)
        return {
            ...state,
            total_item: updateCartItem,
            total_price: updateTotalPrice,
        }



    }
    return state
}


export default CartReducer
