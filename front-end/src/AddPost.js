import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/posts', {
        title,
        content,
      });
      onPostAdded(response.data); // Notify parent component about the new post
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;