import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const Trainertask = () => {
  const [showInterns, setShowInterns] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    {
      id: 1,
      name: 'Task 1',
      deadline: '2024-07-01',
      document: 'document1.pdf',
      notes: 'Complete the assignment on time.',
      link: 'https://example.com/document1',
      interns: [
        {
          name: 'John Doe',
          course: 'Web Development',
          answer: 'Answer 1',
          mark: '90',
        },
        {
          name: 'Jane Smith',
          course: 'Data Science',
          answer: 'Answer 2',
          mark: '85',
        },
      ],
    },
    {
      id: 2,
      name: 'Task 2',
      deadline: '2024-07-05',
      document: 'document2.pdf',
      notes: 'Review the document carefully.',
      link: 'https://example.com/document2',
      interns: [
        {
          name: 'Mary Johnson',
          course: 'UX Design',
          answer: 'Answer 3',
          mark: '95',
        },
        {
          name: 'Alex Brown',
          course: 'Backend Development',
          answer: 'Answer 4',
          mark: '88',
        },
      ],
    },
  ];

  const handleViewInterns = (taskId) => {
    setSelectedTask(taskId);
    setShowInterns(true);
  };

  const selectedTaskDetails = tasks.find((task) => task.id === selectedTask);

  return (
    <div className="container mt-4">
      <h2>{showInterns ? 'Interns' : 'Tasks'}</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline</th>
            <th>Document</th>
            <th>Notes</th>
            <th>Link</th>
            {!showInterns && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.deadline}</td>
              <td>{task.document}</td>
              <td>{task.notes}</td>
              <td>
                <a href={task.link} target="_blank" rel="noopener noreferrer">
                  {task.link}
                </a>
              </td>
              {!showInterns && (
                <td>
                  <Button variant="info" onClick={() => handleViewInterns(task.id)}>
                    View Interns
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showInterns} onHide={() => setShowInterns(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Interns for Task {selectedTask}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTaskDetails && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Answer</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                {selectedTaskDetails.interns.map((intern, index) => (
                  <tr key={index}>
                    <td>{intern.name}</td>
                    <td>{intern.course}</td>
                    <td>{intern.answer}</td>
                    <td>{intern.mark}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trainertask;
