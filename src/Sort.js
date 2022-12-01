import React from 'react'
import "./Sort.css"
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { useFilterContext } from './Component/context/FilterContext';

const Sort = () => {
const {filter_products,grid_view ,setGridView,setListView,sorting}=useFilterContext()
// console.error(grid_view)

  return (
    <div className='sortdflex'>
   <div className='btndf'>
 <button onClick={()=>setGridView()}>
    <BsFillGridFill className={`${grid_view?"icon actback":"icon " }`}/>
    </button>

<button onClick={()=>setListView()}>
    <CiGrid2H className={`${grid_view?"icon":"icon actback"}`}/></button>

   </div>
   
   <div><h3><strong>{filter_products.length} Available Products </strong></h3></div>
   <div>
<form>
  <label htmlFor='sort'></label>
  <select id='sort' onClick={sorting}>
<option value="Lowest">Price(Lowest) </option>
<option value="#" disabled></option>
<option value="Highest">Price(Highest) </option>
<option value="#" disabled></option>
<option value="a-z">a-z </option>
<option value="#" disabled></option>
<option value="z-a">z-a </option>

  </select>
</form>


   </div>
    </div>
  )
}

export default Sort
