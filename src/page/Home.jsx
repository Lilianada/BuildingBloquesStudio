import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import Packages from '../components/Packages'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'
import { Services } from '../components/Services'
import Templates from '../components/Templates'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Templates/>
      <Packages/>
      <CallToAction/>
      {/* <Team/> */}
      <Footer/>
      <BackToTop/>
    </div>
  )
}
