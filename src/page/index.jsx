import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Features from '../components/Features'
import Productivity from '../components/Productivity'
import NewService from '../components/NewService'

export default function SinglePage() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Productivity/>
      <CTA/>
      {/* <NewService/> */}
      <Footer/>
    </div>
  )
}
