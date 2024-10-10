import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate();
  return (
    
    <div className={styles.container} onClick={() => navigate('')}>
      
      <div className={styles.a} >
        <div className={styles.card}>
          <img className={styles.icon} src="" alt="" />
          <h2 className={styles.title}> </h2>
        </div>
      </div> 
        
      
      
    </div> 
      
    );
  
};

export default Category
