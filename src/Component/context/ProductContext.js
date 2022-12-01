import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer"


const AppContext =createContext()

const API="https://api.pujakaitem.com/api/products"

const initialState={
    isLoading:false,
    isError:false,
    products:[], 
    featuresProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}


const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer ,initialState)

const getProducts=async (url)=>{

dispatch({type:"SET_LOADING"})

   try {const res=await axios.get(url)
    // console.log(res)
    const products=await res.data;
        // console.log(products)
    dispatch({type: "SET_API_DATA", payload:products})
    // console.log(products[0].featured)

}catch(error){
    dispatch({type:"API_ERROR"})
}
}    

// 2nd API Call

const getSingleProduct= async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
try{
const res= await axios (url)
const singleProducts=await res.data;
 dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProducts})
//  console.log(singleProducts)
}catch(error){
dispatch({type:"SET_SINGLE_ERROR"})
}

}

useEffect(()=>{
getProducts(API)
},[])


return(
    <AppContext.Provider value={{...state,getSingleProduct}}>{children} </AppContext.Provider>
)
}

const useProContext=()=>{
    return useContext(AppContext)
}



export{AppContext ,AppProvider ,useProContext}