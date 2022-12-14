import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = (ele) => {
  return (
    <div>


      <div className='ser-data-con'>
        <NavLink to={`/SingleProduct/${ele.id}`}>
          <div className='feaimage'>
            <img src={ele.image}></img>
          </div>
        </NavLink>
        <div className='fea-flex-jsb'>
          <h4>{ele.name}</h4>
          <h4>Rs: {ele.price}/-</h4>
        </div>
      </div>
    </div>
  )
}

export default Product
