import React from 'react'
import styles from './CategoryCard.module.scss'

const categoryCard = () => {

  const Icon = icon;
  const {name, icon} = category;

  return (
    <div className={styles.card}>  
      
      <img src={category.Icon} alt="" />
      <p className={styles.name}>{name}</p>
      <p>programming</p>
    </div>
  )
}

export default categoryCard



