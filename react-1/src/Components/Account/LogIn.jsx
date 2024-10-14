import React from 'react'
import styles from  './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'


export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      await login({ username });
    } else {
      alert("Invalid username or password")
    }
  };
  return (
    <div className={styles.registration}>
        <h2>Login</h2>
        
            
        <div className={styles.registrationform}>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your email' required/>
              <label htmlFor="password">Password: </label>
              <input type="password" id='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required/>
              <button type='submit' className={styles.btn} onClick={() => navigate("/")}>Login</button>
          </form>
        </div> 
    </div> 
  );
};


//<textarea name="message" rows='6' id="message" required></textarea>//<label>Write a message</label>
