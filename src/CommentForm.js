import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddComment(comment);
        setComment('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default CommentForm;