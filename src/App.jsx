import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Settings from "./pages/settings/settings";
import Creator from "./pages/creator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/post" element={<Creator/>} />
      <Route path="/settings" element={<Settings/>} />
    </>
  )
);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
