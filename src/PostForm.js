import React, { useState } from 'react';
import moment from 'moment';

function PostForm({ onAddPost }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            author: author,
            date: moment().format('MMM DD, YYYY'),
            title: title,
            summary: summary,
        };
        onAddPost(newPost);
        setAuthor('');
        setTitle('');
        setSummary('');
    };

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    placeholder="Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                ></textarea>
                <br />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}

export default PostForm;