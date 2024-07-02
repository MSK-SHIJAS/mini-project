import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Interntask = () => {
  const tasks = [
    {
      id: 1,
      headline: 'Book Store Task 1',
      deadline: '2024-07-01',
    },
    {
      id: 2,
      headline: 'Book Store Task 2',
      deadline: '2024-07-05',
    },
    {
      id: 3,
      headline: 'Book Store Task 3',
      deadline: '2024-07-10',
    },
  ];

  return (
    <Container className="mt-4">
      <h2>Tasks</h2>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{task.headline}</Card.Title>
                <Card.Text>
                  <strong>Deadline:</strong> {task.deadline}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Interntask;
