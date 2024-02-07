import React from 'react'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div>
        <Hero/>
        <div className='mx-auto container'>

        <Product/>
        </div>
    </div>
  )
}

export default Home