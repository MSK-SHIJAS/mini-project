import mongoose from 'mongoose';

const internSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  photo: { type: String },
  course: { type: String },
  username: { type: String },
  password: { type: String },
  contact: { type: String },
  email: { type: String },
  status: { type: String },
  trainerId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer' // Ensure this is correct if you are referencing a Trainer model
  },
  trainername: { type: String }
});

const Intern = mongoose.model('Intern', internSchema);

export default Intern;
