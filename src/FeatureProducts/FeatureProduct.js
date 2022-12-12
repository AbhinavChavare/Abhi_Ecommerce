import React from 'react'
import "./FeatureProduct.css"
import Product from '../Product/Product'
import { useProContext } from '../Component/context/ProductContext'


const FeatureProduct = () => {
  const {featuresProducts } = useProContext()

  // if (isLoading) {
  //   return <div style={{textAlign:"center",fontSize:"3rem"}}>.......Loading</div>
  // }
  
  return (
    <div className="sertext">

      <div >
        <h3>Check now</h3>
        <h2>Our Feature Services</h2>
      </div>
      <div className='sercon'>
        {
          featuresProducts.map((ele) => {
            return (
              <div key={ele.name}>
                <Product  {...ele}/>
              </div>
            )
          })


        }


      </div>

    </div>
  )
}

export default FeatureProduct
