import React from 'react'
import styles from  './Login.module.scss'

const LogIn = () => {
  return (
    <div className={styles.registration}>
        <h2>Login</h2>
        
            
        <div className={styles.registrationform}>
            <form>
                <input type="text" name='email' placeholder='Enter your email' required/>
                <input type="tel" name='password' placeholder='Enter your password' required/>
                <button type='submit' className={styles.btn}>Submit</button>
            </form>
            <span>Sending</span>
        </div> 
    </div> 
  )
};

export default LogIn

//<textarea name="message" rows='6' id="message" required></textarea>//<label>Write a message</label>
