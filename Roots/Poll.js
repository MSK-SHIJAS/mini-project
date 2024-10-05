import express from 'express';
import { Login, adminRegister } from '../Controllers/Poll.js';

const router = express.Router();

router.post('/adminreg', adminRegister);
router.post('/login', Login);


export default router;
