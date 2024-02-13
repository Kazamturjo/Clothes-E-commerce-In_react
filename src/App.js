import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ProductDetail from "./Pages/Shop/SIngleProduct/SingleProduct";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import AddProduct from "./Pages/Addproduct/AddProduct";

function App() {
  const [cart,setCart]=useState([])


  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout cart={cart} setCart={setCart} />}>
     <Route path="" element={<Home/>}/>
     <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>}/>
     <Route path="/shop/:id" element={<ProductDetail cart={cart} setCart={setCart}/>}/>
     {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/> */}
     <Route path="/addproduct" element={<AddProduct/>}/>
      

     </Route>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
