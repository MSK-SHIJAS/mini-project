import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const Internregister = () => {
  return (
    <div>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col md={6} className="d-flex flex-column align-items-center bg-dark p-5 justify-content-between">
            <Image src="profile.png" alt='dp' roundedCircle className="mb-4" />
            <div className="mt-auto">
              <Button variant="primary" className="mb-2">Login</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center p-5">
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formDateJoined" className="mb-3">
                <Form.Label>Date Joined</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="formUploadPhoto" className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formCourse" className="mb-3">
                <Form.Label>Select Course</Form.Label>
                <Form.Control as="select">
                  <option>Course 1</option>
                  <option>Course 2</option>
                  <option>Course 3</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
