import mongoose from 'mongoose';

const PollSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  UserId: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;
