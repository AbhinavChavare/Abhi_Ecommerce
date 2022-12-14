import React from 'react'
import "./Products.css"
import ProductList from '../Component/ProductList/ProductList'
import Sort from '../Component/Sort/Sort'
import FilterSection from '../Component/FilterSection/FilterSection'

const Products = () => {

  return (
    <div className='container'>
      <div className='prod-view-flex'>
        <div className='filter-view'>
          <FilterSection />
        </div>
        <div className='product-view'>
          <div className='product-fil-top'>
            <Sort />
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Products
