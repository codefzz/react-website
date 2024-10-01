import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import { RouterProvider } from 'react-router-dom'
import "@fontsource/roboto"
import "@fontsource/roboto/400.css"

//import { router } from './router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
*/
