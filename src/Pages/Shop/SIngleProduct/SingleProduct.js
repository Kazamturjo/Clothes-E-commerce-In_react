// ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({cart,setCart}) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch (`http://localhost:5000/product/${id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();
          setIsLoading(false);
          setProduct(json.data); 
        } catch (error) {
          setIsLoading(false);
          console.error("Error fetching data:", error);
        }
        
      };
      

  
      fetchData();
    }, [id]);

  // if (isLoading) {
  //   return <div className='text-4xl bg-black font-serif mt-20 text-center text-white '>Loading product details...</div>;
  // }

  // if (!product) {
  //   return <div>No product found</div>;
  // }
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
    <div className="bg-gray-100  py-8 container mx-auto p-4  ">
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
      {isLoading ? (
  <div className='text-4xl bg-black font-serif text-white '>Loading product details...</div>
) : (  
  <>
       <Link
  to="/shop"
  className="back-button flex items-center text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
>
  <svg
    className="w-6 h-6 mr-2 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-1v-2h-2v-2h2v-2h2v6zm5-6h-2v2h-2v-2H8V7h10v4z" />
  </svg>
  <span className="text-lg font-semibold">Back to all products</span>
</Link>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.productName}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button onClick={()=>addToCart(product)} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">
              {product.productName}
            </h2>
            <p className="text-gray-600 dark:text-gray-900 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-900">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-900">
                  ${product.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-900">
                  Availability:
                </span>
                <span className="}text-gray-600 dark:text-gray-900">
                 {''} In Stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default ProductDetails;
