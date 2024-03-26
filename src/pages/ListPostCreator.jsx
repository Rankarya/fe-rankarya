import CreatePost from "../components/CreatePost.jsx";
import PostCreator from "../components/PostCreator.jsx";
import SearchPost from "../components/SearchPost.jsx";

const ListPostCreator = () => {
  return (
    <>
        <CreatePost/>
        <SearchPost/>
        <PostCreator/>
    </>
  )
}

export default ListPostCreator;