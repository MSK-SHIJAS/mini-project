import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [data, setData] = useState({}); // Initialize data as an object
  
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:4000/auth/login', data);
      console.log(response.data.userType);
      toast.success('Login successful');
      if (response.data.userType === 'admin') {
        navigate('/admin');
      } else if (response.data.userType === 'intern') {
        navigate('/intern');
      } else if (response.data.userType === 'trainer') {
        navigate('/trainer');
      }
    } catch (e) {
      console.log(e);
      toast.error('Invalid login credentials');
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col md={6} className="d-flex flex-column align-items-center bg-primary-subtle p-5">
            <Image src="profile.png" alt="Profile" className="mb-4" />
            <Button variant="primary" href='/' className="mb-2">Sign Up</Button>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center p-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={handleChange} placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
