import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ServiceCard = ({ data }) => {
  const params = useParams()
  const navigation = useNavigate()

  return (
    <div className={styles.container} onClick>
      {categories.map((category)=> (
      <div className={styles.a} >
        <div className={styles.card} key={category.title}> 
          <img className={styles.icon} src={category.icon} alt="" />
          <h2 className={styles.title}>{category.title} </h2>
          <Link to={`/service/${category.title}`}>View</Link>
        </div>
      </div> 
        
      ))}
      
    </div>
  )
}

export default ServiceCard
