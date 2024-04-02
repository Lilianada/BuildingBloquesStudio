import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Support from '../components/Support'
import Features from '../components/Features'
import Productivity from '../components/Productivity'

export default function SinglePage() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Productivity/>
      {/* <Support/> */}
      <Footer/>
    </div>
  )
}
