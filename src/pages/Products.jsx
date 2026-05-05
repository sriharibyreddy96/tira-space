import React, { useEffect } from 'react'
import FeaturedProducts from '../components/products/FeaturedProducts'
import Portfolio from '../components/products/Portfolio'
import TechCategories from '../components/products/TechCategories'
import UseCases from '../components/products/UseCases'

const Products = () => {
      // ✅ Runs when About page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <FeaturedProducts />
        <Portfolio />
        <TechCategories />
        <UseCases />
    </>
  )
}

export default Products