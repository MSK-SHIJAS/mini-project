
import express from 'express';
import { addBook, getBooks, updateBook } from '../Controllers/Book.js';

const router = express.Router();

router.get('/books', getBooks); 
router.post('/books', addBook); 
router.put('/books/:id', updateBook);




export default router;