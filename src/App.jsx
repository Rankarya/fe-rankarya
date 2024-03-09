import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Settings from "./pages/settings/settings";
import Creator from "./pages/creator";
import Categories from './pages/categories';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/post" element={<Creator />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
