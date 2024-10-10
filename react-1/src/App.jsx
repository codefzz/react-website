import React, { useState } from 'react'
import ReactDom from "react-dom/client"
import { Routes, Route} from 'react-router-dom'
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Hero from './Components/Layout/Hero'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services'
import Home from './Components/Home/Home'
import Navbar from './Components/Layout/Navbar'
//import Navigation from './Components/Routes/Navigation'
import CategoryList from './Components/Layout/CategoryList'
//import './App.module.scss'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
             
      </Routes>
    </> 
    
  )
};

//<Route path="*" element={<Nomach />} />

export default App

/*

<div className="">
      
      <Navbar />  
      <Hero /> 
      <CategoryList /> 
       
    </div>  
/*
  return (
    <>
      <h1></h1>
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

  /*
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    */
