import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
       <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col md={6} className="d-flex flex-column align-items-center bg-primary-subtle p-5">
          <Image src="profile.png" alt="hi" className="mb-4 " />
          <Button variant="primary" className="mb-2">Sign Up</Button>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center p-5">
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login
