import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPost from "./pages/ListPost.jsx";


function App() {
  return (
    <Router>
      <Routes>
      <Route path={"/post"} element={<ListPost />} />
      </Routes>
    </Router>
    // <div>
    //   <ul className='flex gap-4'>
    //     <li>tes1</li>
    //     <li>tes2</li>
    //   </ul>
    // </div>
  
    
  )
}

export default App
