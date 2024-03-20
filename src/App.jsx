import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPost from "./pages/ListPost.jsx";


function App() {
  return (
    <Router>
      <Routes>
      <Route path={"/post"} element={<ListPost />} />
      </Routes>
    </Router>
  )
}

export default App
