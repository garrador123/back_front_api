// PostList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {isLoading && <p className="text-red-500">Loading...</p>}
      <ul className="space-y-4">
        {posts?.map(post => (
          <li key={post.id} className="bg-white shadow-md rounded px-4 py-2">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>  );
};

export default PostList;