import React from 'react'
import { useProContext } from './Component/context/ProductContext'
import HeroSection from "./Component/HeroSection"


const About = () => {

const dar=useProContext ()
// console.log(dar)
  return (
    <div>

<h1>{dar.fname}</h1>

      <HeroSection welc="Wlecome to About" stname="Abhinav Ecommerce"  />
    </div>
  )
}

export default About
