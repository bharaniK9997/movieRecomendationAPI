import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

//import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Home1 from './Home1'
function App() {

  return (
    <>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home1/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
