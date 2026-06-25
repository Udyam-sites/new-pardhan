import React from 'react'
import Navbar from './components/Navbar'
import HomeCarousel from './components/HeroSection'
import FlavourAmbassadorSection from './components/historySection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel/>
      <FlavourAmbassadorSection/>
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default page