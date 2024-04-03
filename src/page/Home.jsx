import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Productivity from '../components/TargetMarket'
import NewService from '../components/NewService'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Productivity/>
      <Features/>
      <NewService/>
      <Footer/>
    </div>
  )
}
