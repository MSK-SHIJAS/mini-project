import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const BlogRegister = () => {
  const [register, setRegister] = useState({});
  const [refresh, setRefresh] = useState(true);

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:4000/BlogRegister/BlogRegister', register);
      setRefresh(!refresh);
      toast.success('User registered successfully');
    } catch (e) {
      toast.error(e.response.data.message || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='YOUR NAME' onChange={handleChange} />
        <input type='email' name='email' placeholder='YOUR EMAIL' onChange={handleChange} />
        <input type='password' name='password' placeholder='YOUR PASSWORD' onChange={handleChange} />
        <Button type='submit'>SUBMIT</Button>
        <Link to='/login'>
          <Button>LOGIN</Button>
        </Link>
      </form>
    </div>
  );
};

export default BlogRegister;
