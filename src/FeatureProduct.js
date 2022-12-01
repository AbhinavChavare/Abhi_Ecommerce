import React from 'react'
import "./FeatureProduct.css"
import { useProContext } from './Component/context/ProductContext'
import Product from './Product'


const FeatureProduct = () => {
  const { isLoading, featuresProducts } = useProContext()

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
