import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Home'
import { Info } from './Info'
import { Login } from './Login'
import Props from './Props'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/props" element={<Props/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
