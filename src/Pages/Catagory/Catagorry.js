import React from 'react'
import img from '../../assetss/Brands/1.png'
import img2 from '../../assetss/Brands/2.png'
import img3 from '../../assetss/Brands/3.png'
import img4 from '../../assetss/Brands/4.png'
import img5 from '../../assetss/Brands/5.png'
import img6 from '../../assetss/Brands/apple-store.png'
import { Link } from 'react-router-dom';

const Catagorry = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
        <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
          
            <img src={img} alt=''/>
            <img src={img2} alt=''/>
            <img src={img3} alt=''/>
            <img src={img4} alt=''/>
            <img src={img5} alt=''/>
            <img src={img6} alt=''/>
        </div>
        <div className='lg:flex flex-col mt-8 md:flex-row text-center gap-6  relative'>
            <p className='font-semibold transition-transform transform hover:scale-150 uppercase lg:-rotate-90 text-center md:h-20  bg-black lg:h-11 lg:absolute top-1/2 -left-60 text-white lg:p-1.5 p-2 rounded-lg inline-flex '>Explore new and popular styles</p>
            <div >
            <Link to='/shop'>
            <img src='https://i.pinimg.com/564x/11/02/52/1102522f19d0c42879be92430a5e7908.jpg' alt='' className='w-full sm:h-[910px] p-3 lg:p-0 h-96 group overflow-hidden rounded-xl transition-transform transform hover:scale-105'/>
            </Link>

            </div>
            <div className='md:w-[670px] lg:w-1/2 '>
                <div className=' grid lg:grid-cols-2 grid-cols-2 gap-2 mt-2 lg:mt-0 '>
                    <Link to='/shop'><img src='https://i.pinimg.com/736x/ee/cf/e0/eecfe067a40576e50f42ce1ed3619ac4.jpg' alt='' className=' group overflow-hidden rounded-xl transition-transform transform hover:scale-105'/></Link>
                    <Link to='/shop'><img src='https://i.pinimg.com/564x/17/d8/12/17d81234c02642e8898c8eac113927bb.jpg' alt='' className='group overflow-hidden rounded-xl transition-transform transform hover:scale-105'/></Link>
                    <Link to='/shop'><img src='https://i.pinimg.com/564x/0a/a6/8b/0aa68bc150ae0b459dcf085ba3561f50.jpg' alt='' className='group overflow-hidden rounded-xl transition-transform transform hover:scale-105'/></Link>
                    <Link to='/shop'><img src='https://i.pinimg.com/564x/2f/f3/09/2ff309549573d74d8b6f339aff6adb85.jpg' alt='' className='lg:h-[457px]  group overflow-hidden rounded-xl transition-transform transform hover:scale-105'/></Link>
                    

                </div>

            </div>
        </div>
    </div>
  )
}

export default Catagorry