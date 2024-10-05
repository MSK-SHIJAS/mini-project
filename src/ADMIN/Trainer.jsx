import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewtrainer/viewtrainer');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.post(`http://localhost:4000/viewtrainer/viewtrainer/accept/${id}`);
      setTrainers((prev) =>
        prev.map((trainer) => (trainer._id === id ? { ...trainer, status: 'ACCEPTED' } : trainer))
      );
    } catch (error) {
      console.error('Error accepting trainer:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:4000/viewtrainer/viewtrainer/reject/${id}`);
      setTrainers((prev) =>
        prev.map((trainer) => (trainer._id === id ? { ...trainer, status: 'REJECTED' } : trainer))
      );
    } catch (error) {
      console.error('Error rejecting trainer:', error);
    }
  };

  return (
    <div style={{ marginTop: '-110px' }} className='ms-5'>
      <Container>
        <h2>TRAINERS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>COURSE</th>
              <th>DATE JOINED</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer._id}>
                <td>{trainer.name}</td>
                <td>{trainer.course}</td>
                <td>{new Date(trainer.date).toLocaleDateString()}</td>
                <td>{trainer.status}</td>
                <td>
                  <Button
                    variant='warning'
                    className='me-2'
                    onClick={() => handleAccept(trainer._id)}
                    disabled={trainer.status === 'ACCEPTED'}
                  >
                    ACCEPT
                  </Button>
                  <Button
                    variant='danger'
                    className='me-2'
                    onClick={() => handleReject(trainer._id)}
                    disabled={trainer.status === 'REJECTED'}
                  >
                    REJECT
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Trainer;
