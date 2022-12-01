import React from 'react'
import Product from './Product'


const GridView = ({products}) => {
  
  return (
   
    <div className='sercon '>
        {
          products.map((ele) => {
            return (
              <div key={ele.name}>
                <Product  {...ele}/>
              </div>
            )
          })
        }
    </div>

  )
}

export default GridView
