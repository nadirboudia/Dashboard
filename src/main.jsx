import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './Pages/Dashboard/Dashboard'
import Team from './Pages/Team/Team.jsx'
import Bar from './Pages/Bar/Bar'
import Pie from './Pages/Pie/Pie'
import Line from './Pages/Line/Line'
import Geography from './Pages/Geagraphy/Geography'
import Calendar from './Pages/Calendar/Calendar'
import Contacts from './Pages/contacts/Contacts'
import Faq from './Pages/faq/Faq'
import Invoices from './Pages/invoices/Invoices'
import Profile from './Pages/Profile/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={<App/>}>
<Route index element={<Dashboard/>}/>
<Route path='team' element={<Team/>}/>
<Route path='bar' element={<Bar/>}/>
<Route path='Pie' element={<Pie/>}/>
<Route path='Line' element={<Line/>}/>
<Route path='geography' element={<Geography/>}/>
<Route path='calendar' element={<Calendar/>}/>
<Route path='contacts' element={<Contacts/>}/>
<Route path='faq' element={<Faq/>}/>
<Route path='invoices' element={<Invoices/>}/>
<Route path='form' element={<Profile/>}/>

</Route> 
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />
 
  </StrictMode>,
)
