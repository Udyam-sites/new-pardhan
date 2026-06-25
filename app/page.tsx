import React from 'react'
import HomeCarousel from './components/HeroSection'
import FlavourAmbassadorSection from './components/historySection'
import HeritageSection from './components/HeritageSection'

import SuccessSection from './components/sixp'


const page = () => {
  return (
    <div>
      <HomeCarousel/>
      <HeritageSection/>
      <SuccessSection/>
      <FlavourAmbassadorSection/>
    </div>
  )
}

export default page