import React from 'react'
import "./Products.css"
import ProductList from './ProductList'
import Sort from './Sort'
import FilterSection from './FilterSection'


const Products = () => {

  return (
    <div className='container'>
    <div className='prod-view-flex'>
<div className='filter-view'>
<FilterSection/>
</div>
<div className='product-view'>
  <div className='product-fil-top'>
  <Sort/>
  </div>
  {/* <div className='product-cont'> */}
    <ProductList  />
  {/* </div> */}
</div>
    </div>
    </div>
  )
}

export default Products
