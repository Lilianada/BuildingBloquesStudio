import React from 'react'
import StoreNavigation from '../components/MarketPlace/StoreNavigation'
import ProductList from '../components/MarketPlace/ProductList'

export default function MarketPlace() {
  return (
    <div>
      {/* This is still under sonstruction and will be worked on when BBCS templates surpass 15. */}
      <StoreNavigation/>
      <ProductList/>
    </div>
  )
}
