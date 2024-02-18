import React from 'react'
import { Link } from 'react-router-dom'

const Offter = () => {
  return (
    <div>
        <div className='lg:h-screen relative '>
            <img src='https://i.pinimg.com/originals/54/86/53/5486534e6354968c49e19d40f61bb162.jpg' alt=''
            className=' w-full h-full object-cover'/>
            <div className='bg-gray-500 font-serif pt-1 lg:text-2xl absolute lg:bottom-28 md:lg:bottom-28 bottom-6 lg:right-[40%] right-14 w-20 h-7 lg:w-48 lg:h-11  text-center rounded-lg hover:text-white hover:bg-slate-500 '>
              <Link to='/shop' className='font-abc '>Shop now</Link>
            </div>
        </div>
    </div>
  )
}

export default Offter