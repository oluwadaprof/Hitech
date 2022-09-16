import React from 'react'
import Hero from '../../components/herosection/Hero'
import Navbar from '../../components/navbar/Navbar'
import SectionOne from '../../components/sectionone/SectionOne'
import SectionTwo from '../../components/sectiontwo/SectionTwo'
import "./home.scss"

const Homepage = () => {
  return (
    <div className='homepage' >
        <Navbar/>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>
    </div>
  )
}

export default Homepage