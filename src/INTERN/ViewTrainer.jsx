import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewTrainer = () => {
  const [trainer, setTrainer] = useState([]);
  const apiUrl = 'http://localhost:4000/viewtrainer/viewtrainer'; // API endpoint to fetch interns

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTrainer(response.data);
    } catch (error) {
      console.error('Error fetching Interns:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="fw-bold fs-3">TRAINERS</h2>
      <div className="d-flex flex-wrap justify-content-start gap-4">
        {trainer.map((trainers) => (
          <Card key={trainers._id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={
                trainers.photo
                  ? `http://localhost:4000/${trainers.photo.replace(/\\/g, '/')}`
                  : 'default-placeholder-image.jpg'
              }
              alt={`${trainers.name}'s photo`}
              
            />
            <Card.Body>
              <Card.Title>{trainers.name}</Card.Title>
              <Link to={`/trainer/${trainers._id}`}>
                <Button variant="primary">More Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ViewTrainer;
