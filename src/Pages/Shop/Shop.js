import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <div className="text-center">Loading.............</div>
        ) : (
          data.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded shadow-md transition transform hover:scale-105">
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-auto object-cover mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <p className="text-gray-500">{product.description.slice(0, 100)}...</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
