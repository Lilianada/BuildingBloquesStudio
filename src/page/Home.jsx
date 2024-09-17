import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import Packages from '../components/Packages'
import About from '../components/About'
import Services from '../components/Services'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Team/>
      <Packages/>
      <CallToAction/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
