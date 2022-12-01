import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { useProContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer"

const FilterContext = createContext()
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sortingValue: "Lowest",
    // isLoading:true
    filters: {
        text: null,
        category: "All",
        company: "All",
        color: "All",
        price:"0",
        maxprice:"0",
        minprice:"0",
    }
}

const FilterProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useProContext()
    // console.warn(products)
    // Set grid View    


    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_List_VIEW" })
    }

    const sorting = (event) => {
        let uservalue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: uservalue })
    }

    // update the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        //    alert(name)
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }

    // to sort products
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sortingValue, state.filters])


    // clear Filter
    const clearFilter=()=>{
        // alert("clear")
       return dispatch({type:"SET_CLEAR_FILTER"})

    }

    useEffect(() => {
        // dispatch({type:"SET_LOADING"})
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue,clearFilter }} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return (
        useContext(FilterContext)
    )
}

export { FilterProvider, FilterContext, useFilterContext }
