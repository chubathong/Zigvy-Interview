import React from 'react';
import Post from './Post';

function PostList({ posts }) {
    return (
        <div>
            <h2>Post List</h2>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default PostList;