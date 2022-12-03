
import React from 'react'
import { NavLink } from 'react-router-dom'
import onlinebusiness from '../images/download3.png'
import Common from './Common';


function Home() {
  return (
    <>
      <Common
        name='Grow your business with'
        img={onlinebusiness}
        visit="/contact"
        btname="contact now"></Common>

    </>
  )
}

export default Home