import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  internId: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Intern' // Assuming there's a model named 'Intern'
  }]
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
