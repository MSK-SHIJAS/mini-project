import React from 'react';
import { Button, Card, Image, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="position-relative" style={{ width: '100vw', height: '75vh' }}>
        <Image 
          src='home.jpg' 
          alt='home' 
          className="w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
        <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={{ width: '250px' }}>
          <Button href='/login'  variant='primary' className="w-100">
            LOGIN
          </Button>
        </div>
      </div>
      <Container className="mt-5">
        <div className="d-flex justify-content-center mb-4">
          <h3>OUR COURSES</h3>
        </div>
        <Row className="justify-content-center">
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="home.jpg" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>
                  6 MONTH COURSE
                </Card.Text>
                <Button variant="primary">FOR MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="home.jpg" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>
                  6 MONTH COURSE
                </Card.Text>
                <Button variant="primary">FOR MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="home.jpg" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>
                  6 MONTH COURSE
                </Card.Text>
                <Button variant="primary">FOR MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="home.jpg" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>
                  6 MONTH COURSE
                </Card.Text>
                <Button variant="primary">FOR MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="home.jpg" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>
                  6 MONTH COURSE
                </Card.Text>
                <Button variant="primary">FOR MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
