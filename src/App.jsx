// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/loginuser"
import Register from "./pages/registeruser"
import ForgotPassword from "./pages/forgotpassword"
import Email from "./pages/emailsent"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/emailsent' element={<Email/>}/>
      </Routes>
    </Router>
  )
}

export default App