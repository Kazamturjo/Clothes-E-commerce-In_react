import React from 'react'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'
import Catagorry from '../Catagory/Catagorry'

const Home = () => {
  return (
    <div>
        <Hero/>
        <div className='max-w-screen-2xl mx-auto container px-4 py-20'>
          <Catagorry/>

        <Product/>
        </div>
    </div>
  )
}

export default Home