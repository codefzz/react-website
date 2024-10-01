import React from 'react'
import cleaning from '../../assets/cleaning.png'
import repair from '../../assets/repair.png'
import paint from '../../assets/paint.png'
import moving from '../../assets/moving.png'
import plumbing from '../../assets/plumbing.png'
import electric from '../../assets/electric.png'
import styles from './CategoryList.css'

const categories = () => [
    {
      icon: cleaning,
      name: "Cleaning"
    },
    {
      icon: repair,
      name: "Repair"
    },{
      icon: paint,
      name: "Paint"
    },{
      icon: moving,
      name: "Moving"
    },{
      icon: plumbing,
      name: "Plumbing"
    },{
      icon: electric,
      name: "Electric"
    },
  ]

const CategoryCard2 = ({category}) => {
//const Icon = icon;
const {Name, icon} = category;

return (
    <div className={styles.card}>  
    
    <img src={category.icon} alt="" />
    <p className={styles.name}>{Name}</p>
    </div>
)
}

const CategoryLi = () => {
  return (
    <div className={styles.container}>
      <h1>PROGRAM</h1>
      {categories && categories.map && categories.map((category) => (
          <CategoryCard2 key={category.name} category={category} />        
      ))}
    </div> 
  )
}

export default CategoryLi

