import { useState } from 'react'
import Settings from './pages/settings/settings'
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

function App() {
  return (
    <div>
      <Navbar />
      <Settings/>
      <Footer />
    </div>
  );
}

export default App;
