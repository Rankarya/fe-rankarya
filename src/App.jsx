import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPostCreator from "./pages/ListPostCreator.jsx";
import ListPostUser from "./pages/ListPostUser.jsx";
import EditPost from "./components/EditPost.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/postCreator"} element={<ListPostCreator />} />
        <Route path={"/postUser"} element={<ListPostUser />} />
        <Route path={"/editPost"} element={<EditPost />} />
      </Routes>
    </Router>
  )
}

export default App
