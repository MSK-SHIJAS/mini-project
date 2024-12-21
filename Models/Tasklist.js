import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, default: 'Pending' },
});

const Tasklist = mongoose.model('Tasklist', taskSchema);

export default Tasklist;

