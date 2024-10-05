import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Interntask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/task/task`)
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);


  return (
    <Container className="mt-4">
      <h2>Tasks</h2>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{task.question}</Card.Title>
                <Card.Text>
                  <strong>Deadline:</strong> {task.deadline}
                </Card.Text>
                <Link to={`/intern/internquestion/${task._id}`}>
                <Button variant="primary">
                  View
                </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Interntask;
