import React from 'react'
import img1 from '../../assetss/612076338efc6-square.jpg'
import img2 from '../../assetss/61207633da644-square.jpg'
import img3 from '../../assetss/628e443549a5d-square.jpg'
import img4 from '../../assetss/6383785ce4773-square.jpg'
import img5 from '../../assetss/6291b3a8d833d-square.jpg'
import img7 from '../../assetss/6383785ce4773-square.jpg'
import img8 from '../../assetss/6383785cd18b6-square.jpg'
import img9 from '../../assetss/64afac038a275-square.jpg'
import Cards from './Cards'

const product=[
  { src: img1, alt: 'Image 1', quantity: 10, price: 816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'T-shirt'},
  { src: img2, alt: 'Image 2', quantity: 100, price: 816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'female', category: 'T-shirt' },
  { src: img3, alt: 'Image 3', quantity: 100, price: 26.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'T-shirt' },
  { src: img4, alt: 'Image 4', quantity: 100, price: 286.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: true, activate: false, gender: 'female', category: 'Jacket' },
  { src: img5, alt: 'Image 5', quantity: 100, price: 216.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'T-shirt' },
  // { src: img7, alt: 'Image 6', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'female', category: 'women' },
  // { src: img8, alt: 'Image 6', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'nature' }, 
  { src: img9, alt: 'Image 8', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'Polo' }, ]

const Product = () => {
  return (
    <div className='mt-16'>
        <div className=' md:px-16 lg:px-16 rounded-xl'>
       <div className="">
           <Cards product={product}/>
        </div>
       </div>
    </div>
  )
}

export default Product