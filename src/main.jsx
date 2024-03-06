import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
