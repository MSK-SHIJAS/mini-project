import Book from "../Models/Book.js";
import mongoose from 'mongoose';

export const addBook = async (req, res) => {
    try {
      const newBook = new Book(req.body);  // Create a new book instance with the request body
      const savedBook = await newBook.save();  // Save the new book in the database
      res.status(201).json(savedBook);  // Return the saved book as a response
    } catch (error) {
      res.status(500).json({ message: 'Error adding book', error });
    }
  };

  export const getBooks = async (req, res) => {
    try {
      const books = await Book.find();  // Fetch all books from the database
      res.json(books);  // Send the books as a JSON response
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Update an existing book (PUT request)
  export const updateBook = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // `new: true` ensures the updated document is returned
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);  // Return the updated book as a response
    } catch (error) {
      res.status(500).json({ message: 'Error updating book', error });
    }
  };