import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BlogLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/BlogLogin/BlogLogin', formData);
      toast.success(response.data.message);
      if (response.data) {
        navigate('/blog');
      }
    } catch (error) {
      toast.error(error.response.data.message || 'Login failed');

    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='username' 
          placeholder='YOUR NAME' 
          value={formData.username}
          onChange={handleChange}
        />
        <input 
          type='password' 
          name='password' 
          placeholder='YOUR PASSWORD' 
          value={formData.password}
          onChange={handleChange}
        />
        <Button type='submit'>LOGIN</Button>
      </form>
    </div>
  );
}

export default BlogLogin;
