// models/Assign.js
import mongoose from 'mongoose';

const AssignSchema = new mongoose.Schema({
  question: { type: String, required: true },
  deadline: { type: Date, required: true },
  notes: { type: String, required: true },
  link: { type: String, required: true },
  documentPath: { type: String, required: true },
  internId: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Intern' // Assuming there's a model named 'Intern'
  }]
});

const Assign = mongoose.model('Assign', AssignSchema);

export default Assign;
