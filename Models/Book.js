// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String,},
  author: { type: String,},
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
