
import Tasklist from "../Models/Tasklist.js";


// Fetch all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasklist.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    const updatedTask = await Tasklist.findByIdAndUpdate(
      id,
      { name, status },
      { new: true } // Return updated document
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
};
