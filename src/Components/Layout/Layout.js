import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from '../../Pages/Footer/Footer';
const Layout = ({cart,setCart}) => {
  return (
    <div>
        <Navbar cart={cart} setCart={setCart}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout