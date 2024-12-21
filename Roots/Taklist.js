import express from 'express';
import { getTasks, updateTask } from '../Controllers/Tasklist.js';

const router = express.Router();

// Route to fetch all tasks
router.get('/tasks', getTasks);

// Route to update a task by ID
router.put('/tasks/:id', updateTask);

export default router;
