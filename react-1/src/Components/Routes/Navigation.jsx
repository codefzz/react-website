import React from 'react'
import { Link  } from 'react-router-dom'
import logo from '../../assets/logo-course.svg'

const Navigation = () => {
 return (
  <>
    <nav className="">
     <ul>
      <li>
       <Link to="/">Home
        <img src={logo} alt="" />
       </Link>
      </li>
      <li>
       <Link to="/Services">Services</Link>
      </li>
      <li>
       <Link to="/About">About</Link>
      </li>
      <li className={styles.libtn}><button className={styles.btn}>Login / Sign Up</button></li>
     
     </ul> 
    </nav>

    <Outlet />
  </>
 )
};

export default Navigation
