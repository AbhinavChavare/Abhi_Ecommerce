import React from 'react'

import HeroSection from '../Component/HeroSection/HeroSection'
import Services from "../Component/ServicesComp/Services"
import Trusted from '../Component/Trusted/Trusted'
import FeatureProduct from '../FeatureProducts/FeatureProduct'

export default function Home() {
  return (
    <div>
      <HeroSection stname="Abhi Ecommerce" />
      <FeatureProduct/>
      <Services />
      <Trusted/>
    </div>
  )
}
