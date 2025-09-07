import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={<App/>}>
    {/* <Route /> */}
</Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
