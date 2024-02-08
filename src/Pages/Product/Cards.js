import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ product }) => {
  return (
    <div className='max-w-screen-2xl mx-auto container  px-4 '>
      <h2 className='text-center  text-4xl p-11 font-bold font-serif'>Elevate Your Style with Our Latest Designs</h2>
      <div className="">
        <Link
          to="/shop"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 "
        >
          {product.map((item, index) => (
            <div
              key={index}
              className="w-full h-96 group overflow-hidden rounded-xl transition-transform transform hover:scale-105"
            >

              <div className="bg-white shadow-md rounded-md h-full m-4 relative">
              <p className="font-bold font-serif absolute top-2 left-5 transition-transform transform hover:scale-150 text-white text-xl z-10">{item.category}</p>
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
              </div>
            </div>
          ))}
          
        </Link>
      </div>
      <div className='max-w-screen-2xl mx-auto mt-20 container  px-4 py-28'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>

                <Link className='relative  group overflow-hidden rounded-xl transition-transform transform hover:scale-105'><img src='https://i.pinimg.com/736x/d3/6d/4b/d36d4be82236d8cae27ab6e31b766683.jpg' alt='' className='rounded-xl '/>
                <p className=' absolute bottom-5 lg:left-28 md:left-10 left-11 text-4xl font-bold z-10 font-serif text-white '>Express Your Personality</p>
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div></Link>
             
                <Link className='relative  group overflow-hidden rounded-xl transition-transform transform hover:scale-105'><img src='https://i.pinimg.com/564x/0e/f7/5d/0ef75dc11ed684d1ea790e37268326c2.jpg' alt=''  className='rounded-xl'/>
                <p className=' absolute bottom-5 lg:left-28 md:left-10 left-11 text-4xl font-bold z-10 font-serif text-white  '>Easy Care</p>
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div></Link>
                <Link className='relative  group overflow-hidden rounded-xl transition-transform transform hover:scale-105'><img src='https://i.pinimg.com/564x/fa/91/ca/fa91ca2701dad67ea7dec92143f3d2ac.jpg' alt='' className='rounded-xl'/>
                <p className='  absolute bottom-5 lg:left-28 md:left-10 left-11 text-4xl font-bold z-10 font-serif text-white  '>Perfect Fit</p>
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div></Link>
              </div>

          </div>
    </div>
  );
};

export default Cards;
