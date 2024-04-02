import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Productivity from '../components/Productivity'
import CTA from '../components/CTA'

export default function SinglePage() {
  return (
    <div>
      <Hero/>
      <Productivity/>
      <Features/>
      {/* <CTA/> */}
      <Footer/>
    </div>
  )
}
