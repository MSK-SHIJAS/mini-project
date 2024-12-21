import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: { type: String},
  lastName: { type: String},
  department: { type: String},
  designation: { type: String},
  dateOfJoining: { type: Date},
  salary: { type: Number},
  image: { type: String }, // URL or path to the uploaded image
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
