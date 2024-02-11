import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = ({cart,setCart}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[searchParams,setSearchParams]= useSearchParams()

  const typeFilter=searchParams.get('category')



  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/product/all?page=1&pageSize=100");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setIsLoading(false);
        setData(json.data); // Assuming json.data is the array of products
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const displayChar= typeFilter 
  ? data.filter(phn=>phn.category === typeFilter):data

  const setCategoryFilter = (category) => {
   setSearchParams({ category });
 };
   
  // const handleCardClick = (productId) => {
  //   setSelectedProductId(productId);
  // };
  const addToCart = (product) =>{
   
    setCart([...cart, product]);
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className='bg-gray-500 '>
       <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
<h1 className="text-3xl font-bold text-center text-white font-serif mb-8">Explore our Product options</h1>
<div className="flex flex-col md:flex-row justify-center items-center md:items-start flex-wrap space-y-4 md:space-y-0 md:space-x-4 mb-8">
  <Link to="?category=t-shirt" className="van-type bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2 md:mb-0">
    T-shirt
  </Link>
  <Link to="?category=Hoddie" className="van-type bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-2 md:mb-0">
    Hoodie
  </Link>
  <Link to="?category=Jacket" className="van-type bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded mb-2 md:mb-0">
    Jacket
  </Link>
  <Link to="?category=Shoe" className="van-type bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-2 md:mb-0">
    Shoe
  </Link>
  <Link to="." className="van-type bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-2 md:mb-0">
    Clear
  </Link>
</div>
    
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 text-wh">Product List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <div className="text-center bg-black text-white text-4xl font-serif">Loading.............</div>
        ) : (
          displayChar.map((product,index) => (
            
            <div key={product._id} className="card mt-20 bg-white border border-gray-200 rounded-lg shadow  ">
              <div key={product._id} className="card  bg-white  rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
                 
                </div>
                <Link to={`/shop/${product._id}`} key={index} className="text-black  focus:outline-none font-medium rounded-lg text-sm z-50  text-center ">
                   <p className='hover:text-blue-300 p-4'>View Details</p> 
             <div className="w-full p- rounded-t-lg" >
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full h-full object-cover rounded-t-lg"
                    />
                  
                </div>
                    </Link>
                
              <div className="px-5 pb-5">
                
                <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {product.productName}
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(3)].map((_, index) => (
                      <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  </div>
                  
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">${product.price}</span>
                  
                  <button onClick={()=>addToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to Cart
                  </button>
                </div>
                <button onClick={() => setCategoryFilter(product.category)}>
        Filter by {product.category}
      </button>
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Shop; 