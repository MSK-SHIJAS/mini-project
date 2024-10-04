import express from 'express';
import { ViewTrainer, AcceptTrainer, RejectTrainer } from '../Controllers/Trainer.js';
import { AcceptIntern, RejectIntern, ViewIntern, AssignTrainer } from '../Controllers/Intern.js';

const router = express.Router();

router.get('/viewtrainer', ViewTrainer);
router.post('/viewtrainer/accept/:id', AcceptTrainer);
router.post('/viewtrainer/reject/:id', RejectTrainer);

router.get('/viewintern', ViewIntern);
router.post('/viewintern/accept/:id', AcceptIntern);
router.post('/viewintern/reject/:id', RejectIntern);
router.post('/assign/:id', AssignTrainer); // Add this route for assigning a trainer to an intern

export default router;
