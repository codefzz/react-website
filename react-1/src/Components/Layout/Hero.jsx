import React from 'react'
import styles from './Hero.module.scss'
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Find Home <span className={styles.titlespan}>Service/Repair</span></h1>
      <h1>Near You</h1>
      <p>Explore Best Home Service & Near You</p>
      <div className ={styles.srchbtn}>
        <input className ={styles.srch} type="text" placeholder='Search'/>
        <button className={styles.btn}><FaSearch /><img src="" alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
