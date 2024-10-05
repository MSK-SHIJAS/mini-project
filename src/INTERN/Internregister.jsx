import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Internregister = () => {
  const [intern, setIntern] = useState({
    name: '',
    date: '',
    course: '',
    contact: '',
    email: '',
    username: '',
    password: '',
    photo: null
  });
  const [refresh, setRefresh] = useState(true);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    
    if (name === 'photo') {
      setIntern({ ...intern, [name]: files[0] });  // Store the file object for photo
    } else {
      setIntern({ ...intern, [name]: value });
    }
  };

  const handleSubmit = async (e) => {

    const formData = new FormData();
    
    // Append each field to formData
    formData.append('name', intern.name);
    formData.append('date', intern.date);
    formData.append('course', intern.course);
    formData.append('contact', intern.contact);
    formData.append('email', intern.email);
    formData.append('username', intern.username);
    formData.append('password', intern.password);

    // Append the photo file
    if (intern.photo) {
      formData.append('photo', intern.photo);
    }

    try {
      let response = await axios.post('http://localhost:4000/auth/internRegister', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setRefresh(!refresh);
      toast.success('Intern registered successfully');
    } catch (e) {
      toast.error(e.response.data.message || 'Error registering intern');
    }
  };

  return (
    <div className='w-100'>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col md={6} className="d-flex flex-column align-items-center bg-dark p-5 justify-content-between">
            <Image src="profile.png" alt='dp' roundedCircle className="mb-4" />
            <div className="mt-auto">
              <Button variant="primary" href='/login' className="mb-2">Login</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center p-5 ">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formDateJoined" className="mb-3">
                <Form.Label>Date Joined</Form.Label>
                <Form.Control type="date" name='date' onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="formUploadPhoto" className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" name='photo' 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="formCourse" className="mb-3">
                <Form.Label>Select Course</Form.Label>
                <Form.Control as="select" name='course' onChange={handleChange}>
                  <option>Java</option>
                  <option>DBMS</option>
                  <option>FLUTTER</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formContact" className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" name='contact' onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name='email' onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name='username' onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Internregister;
