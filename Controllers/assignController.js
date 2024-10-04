// controllers/assignController.js
import mongoose from 'mongoose';
import Assign from '../Models/Assign.js';
import Intern from '../Models/InternRegister.js';
import Task from '../Models/Task.js';

// Controller to handle the assign action
export const assignIntern = async (req, res) => {
  const { question, deadline, notes, link, internId } = req.body;
  let interns=internId.split(',');
  console.log(interns);
  const document = req.file;
  const internObjectIds = interns.map(id => id);
  try {
    const newAssign = new Assign({
      question,
      deadline,
      notes,
      link,
      documentPath: document.path,
      
      
    });

    await newAssign.save();
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const saveSelectedInterns = async (req, res) => {
    try {
      const { selectedInterns } = req.body;
      // Update the isSelected field for the selected interns
      await Task.updateMany(
        { _id: { $in: selectedInterns } },
        { $set: { isSelected: true } } // Example: setting isSelected to true
      );
  
      res.status(200).json({ message: 'Selected interns updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update selected interns' });
    }
  };
  

  export const Tasks = async (req, res) => {
    try {
      const tasks = await Assign.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  export const ViewTasks = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter
  
    try {
      const task = await Assign.findById(id);
      
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };