import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import NewService from '../components/CallToAction'
import Packages from '../components/Packages'
import TargetAudience from '../components/TargetAudience'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <Services/>
      <Packages/>
      <TargetAudience/>
      <NewService/>
      <Footer/>
    </div>
  )
}
