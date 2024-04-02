import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Features from '../components/Features'
import Productivity from '../components/Productivity'
import Team from '../components/Team'

export default function SinglePage() {
  return (
    <div>
      <Hero/>
      <Productivity/>
      <Features/>
      <CTA/>
      <Team/>
      <Footer/>
    </div>
  )
}
