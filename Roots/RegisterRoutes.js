import express from 'express';
import { Login, adminRegister, internRegister, trainerRegister } from '../Controllers/auth.js';
import { upload } from '../Controllers/Intern.js';

const router = express.Router();

router.post('/trainerRegister',upload.single('photo'),trainerRegister);
router.post('/internRegister',upload.single('photo'),internRegister);
router.post('/adminreg', adminRegister);
router.post('/login', Login);


export default router;
