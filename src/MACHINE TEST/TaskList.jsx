import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:4000/tasklist/tasks') // Replace with your backend API URL
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleTaskClick = (task) => {
    alert(`You clicked on: ${task.name}`);

    // Simulate task update
    setTimeout(() => {
      const updatedTask = { ...task, status: 'Completed' };

      // Update backend
      axios.put(`http://localhost:4000/tasklist/tasks/${task._id}`, updatedTask)
        .then(() => {
          // Update task dynamically in state
          setTasks((prevTasks) =>
            prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
          );
        })
        .catch((error) => console.error('Error updating task:', error));
    }, 2000);
  };

  return (
    <div className="container mt-3">
      <h3>Task List</h3>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroupItem
            key={task._id}
            action
            onClick={() => handleTaskClick(task)}
          >
            {task.name} - {task.status}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
