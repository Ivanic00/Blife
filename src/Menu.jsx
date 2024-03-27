import React from 'react'
import "./styles/menu.css"
import logo from './images/Group.png';
import lupa from './images/search-interface-symbol.png'
import user from './images/user.png'
import bag from './images/shopping-bag.png'
import {motion} from 'framer-motion'

export default function Menu() {
  return (
    <motion.div
    initial={{ y: 50 }} 
      animate={{ y: 0 }}    
      transition={{ duration: 0.5 }} 
    className='navbar'>
      <div className="logo"><a href="home"><img src={logo} alt="Logo" /></a></div>
      <ul className='links'>
        <li><a href="home">Productos</a></li>
        <li><a href="home">Promociones</a></li>
        <li><a href="home">Nosotros</a></li>
      </ul>
      <div className="icon_header">
        <a href='home'> <img src={lupa} alt="Logo" /></a>
        <a href='home'> <img src={user} alt="Logo" /></a>
        <a href='home'> <img src={bag} alt="Logo" /></a>
      </div>
    </motion.div>     
  )
}
