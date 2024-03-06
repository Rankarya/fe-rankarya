// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginuser'
import Register from './pages/registeruser'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App