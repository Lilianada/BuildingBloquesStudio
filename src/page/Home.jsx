import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import Packages from '../components/Packages'
import TargetAudience from '../components/TargetAudience'
import Services from '../components/NewServices'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <TargetAudience/>
      <Team/>
      <Packages/>
      <CallToAction/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
