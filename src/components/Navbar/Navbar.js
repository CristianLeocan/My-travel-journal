import React from 'react'
import './navbar.css'
import logoGlobe from '../../Photos/travels.jpg'

const Navbar = () => {
  return (
    <nav>
        <img src={logoGlobe} alt="logo" className='nav--img'/>
        <h1 className='nav--text'> Wonderful moments spent in Romania</h1>
    </nav>
  )
}
export default Navbar