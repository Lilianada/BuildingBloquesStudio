import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import Packages from '../components/Packages'
import TargetAudience from '../components/TargetAudience'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <Services/>
      <Team/>
      <TargetAudience/>
      <Packages/>
      <CallToAction/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
