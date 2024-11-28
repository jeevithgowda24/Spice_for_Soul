import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/frontend_assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {

 const [menu, setMenu]=useState("home");


  return (
    <div className='navbar'>
      <div className='logo-container'>
      <img src={assets.logo1} alt="" className="logo" />
      <p>Spice For Soul ®</p>
      </div>

      <div className="navbar-menuu">
      <ul className="navbar-menu">
       <Link to='/'><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link> 
       <Link to='/products'> <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Products</li></Link>
        <Link to='/about'><li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>About Us</li></Link>
      </ul>
      </div>
      <div className="navbar-right">
       <Link to='/contact'><button onClick={()=>setMenu("contact-us")}>Contact Us</button></Link> 
      </div>
    </div>
  )
}

export default Navbar
