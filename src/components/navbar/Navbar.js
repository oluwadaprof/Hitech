import React from 'react'
import logo from '../../assets/anna logo.png'
import './navbar.scss'
import circleMenu from '../../assets/menu.png'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={logo} alt=""  />
        <img src={circleMenu} alt=""/>
    </div>
  )
}

export default Navbar