import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Initialize with null for file upload
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the file from the file input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to send the file and other data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image); // Append the image file
    formData.append('comment', comment);

    try {
      const response = await axios.post('/Blogpost/Blogpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      if (response.status === 201) {
        navigate('/blogs'); // Navigate to the list of blogs after successful creation
      } else {
        console.error('Failed to create blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file" // Change type to "file" for file upload
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default Blog;
