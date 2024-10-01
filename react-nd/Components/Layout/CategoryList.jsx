import React, {useState} from 'react'
import cleaning from '../../assets/cleaning.png'
import repair from '../../assets/repair.png'
import paint from '../../assets/paint.png'
import moving from '../../assets/moving.png'
import plumbing from '../../assets/plumbing.png'
import electric from '../../assets/electric.png'
//import styles from './CategoryList.css'
//import CategoryCard from '../Services/CategoryCard'
import styles from './CategoryList.module.scss'
//import { useState } from 'react'
//import { redirectDocument } from 'react-router-dom'

function CategoryList() {
  const categories = [
    {
      icon: cleaning,
      title: "Cleaning"
    },
    {
      icon: repair,
      title: "Repair"
    },{
      icon: paint,
      title: "Paint"
    },{
      icon: moving,
      title: "Moving"
    },{
      icon: plumbing,
      title: "Plumbing"
    },{
      icon: electric,
      title: "Electric"
    },
  ];

 //<Icona fontSize={48} /> 
 //const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category)=> (
      <div className={styles.a} >
        <div className={styles.card} key={category.title}> 
          <img className={styles.icon} src={category.icon} alt="" />
          <h2 className={styles.title}>{category.title} </h2>
        </div>
      </div> 
        
      ))}
      
    </div> 
    
  )
};



export default CategoryList

/*{categories && categories.map && categories.map((category, index)=> (
            <img src={category} alt="" />
            ))}
  {categories && categories.map && categories.map((category, index)=> (
          <img src={category} alt="" />
*/


// <img src={category.icon} alt="" />
//<p className={styles.name}>{category.name}</p>

/*
 return (
    <div>
      {
        categories.map(c => (
          <div>
            <div key={c.name}>
              <img src={c.icon} alt="" />
              <h2>{icon.c}</h2>
            </div>
          
          </div>
        )
      )
        
      };
    </div> 

    
  ) 

*/
