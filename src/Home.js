import React from 'react'
import FeatureProduct from './FeatureProduct'
// import { resolvePath } from 'react-router-dom'
import HeroSection from './Component/HeroSection'
import Services from "./Services"
import Trusted from './Trusted'

export default function Home() {
  return (
  <div>
  <HeroSection welc="Wlecome to home" stname="Abhinav Store"/>
  <FeatureProduct/>
  <Services/>
  <Trusted/>
        </div>
  )
}
