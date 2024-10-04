import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  photo: {
    type: String,
  },
  course: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  status:{
        type:String
    },
  specialization:
   { type: String },
});

const Trainer = mongoose.model('trainer', trainerSchema);

export default Trainer;
