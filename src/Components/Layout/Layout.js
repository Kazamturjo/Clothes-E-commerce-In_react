import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router-dom";
const Layout = ({cart,setCart}) => {
  return (
    <div>
        <Navbar cart={cart} setCart={setCart}/>
        <Outlet/>
    </div>
  )
}

export default Layout