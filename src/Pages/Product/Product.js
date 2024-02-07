import React from 'react'
import img1 from '../../assetss/612076338efc6-square.jpg'
import img2 from '../../assetss/61207633da644-square.jpg'
import img3 from '../../assetss/628e443549a5d-square.jpg'
import img4 from '../../assetss/6291b3a8d6908-square.jpg'
import img5 from '../../assetss/6291b3a8d833d-square.jpg'
import img7 from '../../assetss/6383785ccd5b7-square.jpg'
import img8 from '../../assetss/6383785cd18b6-square.jpg'



const Product = () => {
  return (
    <div className='mt-16'>
        <div className=' md:px-16 lg:px-16 rounded-xl'>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-16 gap-y-16 w-[100%]  ">
          {[
            { src: img1, alt: 'Image 1', quantity: 10, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'nature' },
            { src: img2, alt: 'Image 2', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'female', category: 'women' },
            { src: img3, alt: 'Image 3', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'nature' },
            { src: img4, alt: 'Image 4', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: true, activate: false, gender: 'female', category: 'women' },
            { src: img5, alt: 'Image 5', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'nature' },
            { src: img7, alt: 'Image 6', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'female', category: 'women' },
            { src: img8, alt: 'Image 6', quantity: 100, price: 2816.37, availableSize: ["M", "L", "XL", "XXL"], keyword: ["cool", "nice"], deleted: false, activate: true, gender: 'male', category: 'nature' },        
          ].map((image, index) => (
            <div key={index} className="w-full h-96 group overflow-hidden rounded-xl transition-transform transform hover:scale-105">
              <div className="bg-white shadow-md rounded-md h-full m-4">
                <img className="w-full h-full object-cover rounded-xl" src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default Product