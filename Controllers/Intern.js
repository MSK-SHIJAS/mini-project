import mongoose from 'mongoose';
import Assign from '../Models/Assign.js';
import Intern from '../Models/InternRegister.js';
import Trainer from '../Models/TrainerRegister.js';
import Answer from '../Models/Answer.js';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
export const upload = multer({ storage: storage });


export const ViewIntern = async (req, res) => {
  try {
    const trainers = await Intern.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const AcceptIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(req.params.id, { status: 'ACCEPTED' }, { new: true });
    if (!intern) return res.status(404).json({ message: 'Intern not found' });
    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const RejectIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(req.params.id, { status: 'REJECTED' }, { new: true });
    if (!intern) return res.status(404).json({ message: 'Intern not found' });
    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const AssignTrainer = async (req, res) => {
  const { trainerId } = req.body;

  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) return res.status(404).json({ message: 'Intern not found' });

    const trainer = await Trainer.findById(trainerId);
    if (!trainer) return res.status(404).json({ message: 'Trainer not found' });

    intern.trainerId = trainerId;
    intern.status = 'ASSIGNED';
    await intern.save();

    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const ViewQuestion = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Assign.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ message: error.message });
  }
};

export const SendAnswer = async (req, res) => {
  const { internId, answer,question } = req.body;

  try {
    const newAnswer = new Answer({ internId, answer,question });
    await newAnswer.save();
    res.status(201).json({ message: 'Answer saved successfully', data: newAnswer });
  } catch (error) {
    console.error('Error saving answer:', error);
    res.status(500).json({ message: error.message });
  }
};


export const ViewAnswerById = async (req, res) => {
  try {
    // Assuming 'internId' is a field in the Task model and should be populated
    const tasks = await Answer.find().populate('internId'); // Populate other fields if needed
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};