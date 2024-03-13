import CreatePost from "../components/CreatePost.jsx";
import Post from "../components/Post.jsx";
import SearchPost from "../components/SearchPost.jsx";

const ListPost = () => {
  return (
    <>
        <CreatePost/>
        <SearchPost/>
        <Post/>
    </>
  )
}

export default ListPost;