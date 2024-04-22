import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import NewService from '../components/CallToAction'
import ProductVision from '../components/ProductVision'
import TargetAudience from '../components/TargetAudience'

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <Features/> */}
      <ProductVision/>
      <TargetAudience/>
      <NewService/>
      <Footer/>
    </div>
  )
}
