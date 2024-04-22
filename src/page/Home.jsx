import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import NewService from '../components/CallToAction'
import Packages from '../components/Packages'
import TargetAudience from '../components/TargetAudience'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <Features/> */}
      <HowItWorks/>
      <TargetAudience/>
      <Packages/>
      <NewService/>
      <Footer/>
    </div>
  )
}
