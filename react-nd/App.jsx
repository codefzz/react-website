import React, { useState } from 'react'
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Hero from './Components/Layout/Hero'
//import AboutUs from './Components/AboutUs/AboutUs'
import Navbar from './Components/Layout/Navbar'
import CategoryList from './Components/Layout/CategoryList'
//import './App.module.scss'



const App = () => {
  //const [count, setCount] = useState(0)
  return (
    
    <div className="">
      
      <Navbar />  
      <Hero /> 
      <CategoryList /> 
       
    </div>  
  )


/*

<Title subTitle='Our PROGRAM' title='What we offer'/> 
/*
  return (
    <>
      <h1>YES YES YES</h1>
      <Router>
          <Navbar />
            <Switch>
                <Route path="/Home">
                  <Home />
                </Route>  
                <Route path="/Services" >
                  <Services />
                </Route>
                <Route path="/AboutUs"> 
                  <AboutUs />
                </Route>
            </Switch>
        </Router>
    </>
  )
    */
}


export default App


