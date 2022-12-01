// import { useProContext } from "../context/ProductContext"


const FilterReducer = (state, action) => {

  switch (action.type) {

    // case "SET_LOADING":
    //   return {
    //     isLoading:true
    //   }
   

    case "LOAD_FILTER_PRODUCTS":

      let pricesrry=action.payload.map((elem)=>{
        return elem.price
        })
      let   maxprice= Math.max(...pricesrry)
        // console.log(maxprice)

    //  let maxprice=pricesrry.reduce((initialval,curval)=>{
    //   return ( Math.max(initialval,curval),0)

    //   })
    //   console.log(maxprice)
  
          return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        isLoading: false,
        filters:{...state.filters,maxprice:maxprice,price:maxprice}
            }
   
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true
      }
    case "SET_List_VIEW":
      return {
        ...state,
        grid_view: false
      }
    case "GET_SORT_VALUE":
      // let usersortvalue=document.getElementById("sort")
      // let sortdata=usersortvalue.options[usersortvalue.selectedIndex].value
      return {
        ...state,
        sortingValue: action.payload
      }

    case "SORTING_PRODUCTS":

      let newSortData;
      // let tempSortProducts=[...action.payload]
      const { filter_products } = state
      // console.log(filter_products)
      let tempSortProducts = [...filter_products]

      const sortingProducts = (a, b) => {
        if (state.sortingValue === "a-z") {
          return a.name.localeCompare(b.name)
        }
        if (state.sortingValue === "z-a") {
          return b.name.localeCompare(a.name)
        }
        if (state.sortingValue === "Lowest") {
          return a.price - b.price
        }
        if (state.sortingValue === "Higest") {
          return b.price - a.price
        }
      }

      // if(state.sortingValue==="a-z"){
      //   newSortData=tempSortProducts.sort((a,b)=>{
      //     return a.name.localeCompare(b.name)
      //   })
      // }
      // if(state.sortingValue==="z-a"){
      //   newSortData=tempSortProducts.sort((a,b)=>{
      //     return b.name.localeCompare(a.name)
      //   })
      // }
      // if(state.sortingValue==="Lowest"){
      //   newSortData=tempSortProducts.sort((a,b)=>{
      //     return (a.price - b.price)
      //   })
      // }
      // if(state.sortingValue==="Highest"){
      //   newSortData=tempSortProducts.sort((a,b)=>{
      //     return (b.price - a.price)
      //   })
      // }
      newSortData = tempSortProducts.sort(sortingProducts)

      return {
        ...state,
        filter_products: newSortData

      }


    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload
      // console.warn(name, value)
      return {
        ...state,
        filters: {
          ...state.filters, [name]: value,
        }
      }

    case "FILTER_PRODUCTS":
      let { all_products } = state
      let tempFilterProducts = [...all_products]
      let { text, category, company,color,price} = state.filters
      


      if (text) {
        tempFilterProducts = tempFilterProducts.filter((elem) => { return (elem.name.toLowerCase().includes(text)) }
        )
      }

      if (category != "All") {
        tempFilterProducts = tempFilterProducts.filter((elem) => {
          return (elem.category === category)
        }
        )
      }
      if (company != "All") {
        // alert(company)
        tempFilterProducts = tempFilterProducts.filter((elem) => {
          // console.log(elem.company)
          return (elem.company.toLowerCase() === company.toLowerCase())
        }
        )
      }

      if (color!= "All") {
        console.warn(color)
        tempFilterProducts = tempFilterProducts.filter((elem) => {
          return (elem.colors.includes(color))
        }
        )
      }

      if(price){
        tempFilterProducts = tempFilterProducts.filter((elem) =>{
          return elem.price<= price
        } 
        )
        
      }

      // console.error(tempFilterProducts)
      return {
        ...state,
        filter_products: tempFilterProducts

      }

      case "SET_CLEAR_FILTER":
        return{
          ...state,
          ...state.filters,
          filters: {
            text: null,
            category: "All",
            company: "All",
            color: "All",
            price:state.filters.maxprice,
            maxprice:state.filters.maxprice,
            minprice:"0",
        }

        }

    default: return state
  }
}

export default FilterReducer
