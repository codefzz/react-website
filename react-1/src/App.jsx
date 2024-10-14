import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from './Components/Account/LogIn'
import { Secret } from './Components/Account/Secret'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services'
import Home from './Components/Home/Home'
import Navbar from './Components/Layout/Navbar'
//import Categories from './Components/Services/Categories'
//import './App.module.scss'
import { ProtectedRoute } from './hooks/ProtectedRoute'
import { AuthProvider } from './hooks/useAuth'

const App = () => {

  function CatList() {
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
  }
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/secret" element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
            } />
        </Routes>
      </AuthProvider>
    </> 
    
  );

};

//<Route path="/contacts/:Id" element={<Contacts />} />
//<Route path="*" element={<Nomach />} />
//<Route path="/categories/:serviceId" element={<Categories />} />

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
