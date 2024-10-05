import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewIntern = () => {
  const [interns, setInterns] = useState([]);
  const apiUrl = 'http://localhost:4000/viewtrainer/viewintern'; // API endpoint to fetch interns

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await axios.get(apiUrl);
      setInterns(response.data);
    } catch (error) {
      console.error('Error fetching Interns:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="fw-bold fs-3">INTERNS</h2>
      <div className="d-flex flex-wrap justify-content-start gap-4">
        {interns.map((intern) => (
          <Card key={intern._id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={
                intern.photo
                  ? `http://localhost:4000/${intern.photo.replace(/\\/g, '/')}`
                  : 'default-placeholder-image.jpg'
              }
              alt={`${intern.name}'s photo`}
              
            />
            <Card.Body>
              <Card.Title>{intern.name}</Card.Title>
              <Link to={`/interns/${intern._id}`}>
                <Button variant="primary">More Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ViewIntern;
