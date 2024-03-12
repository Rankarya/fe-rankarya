// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/loginuser"
import Register from "./pages/registeruser"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App