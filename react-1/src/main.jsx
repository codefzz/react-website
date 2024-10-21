import { StrictMode } from "react"
import React  from 'react'
import ReactDom from "react-dom/client"
//import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/roboto"
import "@fontsource/roboto/400.css"
//import Navbar from './Components/Layout/Navbar.jsx'
//import { router } from './router'




const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
//import { router } from './router'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])


ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
*/

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
*/
