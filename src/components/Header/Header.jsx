import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_box">
      <Link to="/"><img src="../../../public/Furniro_logo.png" alt="This is logo image" /></Link>
      <div className="Links">
      <NavLink className="Links_1" to="/">Home</NavLink>
      <NavLink className="Links_1" to="/shop">Shop</NavLink>
      <NavLink className="Links_1" to="/about">About</NavLink>
      <NavLink className="Links_1" to="/contact">Contact</NavLink>
      </div>
      <div className="search_row">
       <NavLink to=""><img src="../../../public/account.svg" alt="This is account image" /></NavLink>
       <NavLink to=""><img src="../../../public/search_icon.svg" alt="This is search image" /></NavLink>
       <NavLink to=""><img src="../../../public/akar-icons_heart.svg" alt="This is heart image" /></NavLink>
       <NavLink to=""><img src="../../../public/ant-design_shopping-cart-outlined.svg" alt="This is account image" /></NavLink>
      </div>
      </div>
      
      
    </div>
  )
}

export default Header