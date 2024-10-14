import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo-course.svg';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import Services from '../Services/Services';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import { RiH1 } from 'react-icons/ri';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="">
        <img src={logo} alt="" />
        <ul>
          <li><Link to="/" >Home</Link></li> 
          <li><Link to="/services">Services</Link></li> 
          <li><Link to="/about">About Us</Link></li> 
          <li><Link to="/services/serviceID">Services </Link></li> 
          <li className={styles.libtn}><button className={styles.btn} onClick={() => navigate("/login")}>Login / Sign Up</button></li>
        </ul>
      </nav>
    </>
  )
}
//<li><Link to={<Home/>}>Home</Link></li>
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
/*
<nav className="">
     <img src={logo} alt="" />
     <ul></ul>
      <li><Link to="home">Home</Link></li>
      <li>Services</li>
      <li>About</li>
      <li className={styles.libtn}><button className={styles.btn}>Login / Sign Up</button></li>
    </nav>
  */




