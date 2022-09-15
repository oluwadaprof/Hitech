import React from 'react'
import Hero from '../../components/herosection/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

const Homepage = () => {
  return (
    <div className='homepage' >
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Homepage