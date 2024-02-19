import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
  
const [data,setData] = useState({
  productName: "",
  description: "",
  price: "",
  status: true,
  isActive: true,
  isDeleted: false,
  createDate: new Date(),
  deleteDate: "",
  category: "",
  image: ""
})
  
  const handleChange =(e) =>{
      const {name,value} = e.target
      setData({...data,[name]:value})
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log(data)

   

    axios.post("https://dev-ecommerce-backend.onrender.com/product/add/500", data)
      .then(response => {
        console.log("Product added successfully:", response);
    setData(  {productName: "",
    description: "",
    price: "",
    status: true,
    isActive: true,
    isDeleted: false,
    createDate: new Date(),
    deleteDate: "",
    category: "",
    image: ""
  })
      })
      .catch(error => {
        console.error("Error adding product:", error);
      });
  };
  
  return (
    <form className="max-w-lg py-11   mx-auto mt-20 p-4 space-y-11 bg-gray-100 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="productName">Product Name:</label>
        <input required name='productName'  className="w-full px-3 py-2 border rounded-md" type="text" id="productName" value={data.productName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="description">Description:</label>
        <input required name='description' className="w-full px-3 py-2 border rounded-md" type="text" id="description" value={data.description} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="price">Price:</label>
        <input name='price' required className="w-full px-3 py-2 border rounded-md" type="number" id="price" value={data.price} onChange={handleChange} />
      </div>
      
      <div className="mb-4">
  <label className="block mb-1 font-semibold" htmlFor="category">Category:</label>
  <select name='category' required className="w-full px-3 py-2 border rounded-md" id="category" value={data.category} onChange={handleChange}>
    <option value="">Select a category</option>
    <option value="t-shirt">T-Shirt</option>
    <option value="shoe">Shoe</option>
    <option value="hoddie">Hoddie</option>
    <option value="jacket">Jacket</option>
  </select>
</div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="imageUrl">Image URL:</label>
        <input name='image' required className="w-full px-3 py-2 border rounded-md" type="text" id="imageUrl" value={data.image} onChange={handleChange} />
      </div>
      
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
