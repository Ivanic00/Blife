import React from 'react'
import "./styles/Cards.css"
import card from './images/card.png'
import facebook from './images/facebook.png'
import x from './images/gorjeo.png'
import instagram from './images/instagram.png'
import { motion } from 'framer-motion'

export default function Cards() {
  return (  
      <motion.div 
        whileHover={{ scale: 1.1 }}
      className='Cards'>
        <div className='up'>
          <div className='image'>
            <img src={card} alt="Logo" />
          </div>
          <div className='info'>
            <div className='d'>
              <h3>Citrate Mag</h3>
              <h4> 240 Capsulas | 800Mg</h4>
            </div>
            <div className='price'>
              <h3>$340</h3>
              <h4>$430</h4>
            </div>
          </div>

        </div>
        <div className='Down'>
          <div className="icon">
            <h3>COMPARTE</h3>                     
            <div>
              <a href="home"><img src={facebook} alt="" /></a>
              <a href="home"><img src={x} alt="" /></a>
              <a href="home"><img src={instagram} alt="" /></a>
            </div>
          </div>

          <div className='btn'>
            <motion.button
              whileTap={{ scale: 0.85 }}
            >AGREGAR</motion.button>
          </div>
        </div>
      </motion.div>
  )
}
