import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trainertask = () => {
  const [tasks, setTasks] = useState([]);
  const [showInterns, setShowInterns] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/task/task');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

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
              <td>{task.question}</td>
              <td>{task.deadline}</td>
              <td>
                <a href={`http://localhost:4000/uploads/${task.documentPath}`} target="_blank" rel="noopener noreferrer">
                  View Document
                </a>
              </td>
              <td>{task.notes}</td>
              <td>
                <a href={task.link} target="_blank" rel="noopener noreferrer">
                  {task.link}
                </a>
              </td>
              {!showInterns && (
                <td>
                  <Link to={`/trainer/trainerviewtask/${task._id}`}>
                  <Button variant="info">
                    View Answer
                  </Button>
                  </Link>
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
