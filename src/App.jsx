//<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/loginuser";
import Register from "./pages/registeruser";
import ForgotPassword from "./pages/forgotpassword";
import Email from "./pages/emailsent";
import LandingPage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Settings from "./pages/settings/settings";
import Creator from "./pages/creator";
function App() {



  return (
    <Router>
      <div className="h-screen">
        <div>
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/emailsent' element={<Email/>}/>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/post" element={<Creator />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
      
    </Router>
  )
}

export default App

