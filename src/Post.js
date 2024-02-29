import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Post({ post }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    const handleAddComment = (comment) => {
        setComments([...comments, comment]);
    };

    return (
        <div>
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <p>Created at: {post.date}</p>
            <p>{post.summary}</p>
            <button onClick={() => setShowComments(!showComments)}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && (
                <div>
                    <CommentList comments={comments} />
                    <CommentForm onAddComment={handleAddComment} />
                </div>
            )}
        </div>
    );
}

export default Post;