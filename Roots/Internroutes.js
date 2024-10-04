import express from 'express';
import { SendAnswer, ViewAnswerById,ViewQuestion } from '../Controllers/Intern.js';


const router = express.Router();

router.get('/viewquestion/:id', ViewQuestion);
router.post('/sendanswer/:id',SendAnswer)
router.get('/viewanswer', ViewAnswerById);

export default router;