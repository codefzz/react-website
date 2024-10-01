import React from 'react'
import styles from './Navbar.module.scss'
import logo from '../../assets/logo-course.svg'
//import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
     <img src={logo} alt="" />
     <ul></ul>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li className={styles.libtn}><button className={styles.btn}>Login / Sign Up</button></li>
    </nav>
  )
}

export default Navbar

/*
<div style={navStyle}>
        <Link to="/Home/Home" style={linkStyle}>Home</Link>
        <Link to="/Services/Services" style={linkStyle}>Services</Link>
        <Link to="/AboutUs/AboutUs" style={linkStyle}>About us</Link>
    </div>
*/
/*
<nav className="">
     <img src={logo} alt="" />
     <ul></ul>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li><button className='btn'>Contacts</button></li>
    </nav>
*/





