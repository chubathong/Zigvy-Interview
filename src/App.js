import { useState } from 'react';
import './App.css';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  return (
    <div className="App">
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
