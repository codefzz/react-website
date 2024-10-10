import React from 'react'
import styles from './Home.module.scss'
import Hero from '../../Components/Layout/Hero'
import CategoryList from '../../Components/Layout/CategoryList'

//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <Hero />
     <CategoryList />
    </> 
        
  )  
}

export default Home
