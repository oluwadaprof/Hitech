import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/herosection/Hero'
import Navbar from '../../components/navbar/Navbar'
import SectionFour from '../../components/sectionfour/SectionFour'
import SectionOne from '../../components/sectionone/SectionOne'
import SectionThree from '../../components/sectionthree/SectionThree'
import SectionTwo from '../../components/sectiontwo/SectionTwo'
import "./home.scss"

const Homepage = () => {
  return (
    <div className='homepage' >
        <Navbar/>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Footer/>
    </div>
  )
}

export default Homepage