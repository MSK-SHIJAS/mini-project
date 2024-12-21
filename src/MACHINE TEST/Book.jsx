// Book.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {
  const [book, setBook] = useState({ title: '', author: '', year: '', genre: '' });
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  // Fetch book details by ID
  const fetchBook = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      setMessage('Error fetching book details');
    }
  };

  // Update book details
  const updateBook = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${bookId}`, book);
      setMessage('Book updated successfully');
      setBook(response.data);
    } catch (error) {
      setMessage('Error updating book');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (bookId) fetchBook(bookId);
  }, [bookId]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={() => fetchBook(bookId)}>Fetch Book</button>

      {book && (
        <div>
          <h2>Book Details</h2>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            placeholder="Year"
          />
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <button onClick={updateBook}>Update Book</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Book;
