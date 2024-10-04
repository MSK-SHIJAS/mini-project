// Roots/assignRoutes.js
import express from 'express';
import multer from 'multer';
import { assignIntern, saveSelectedInterns, Tasks, ViewTasks } from '../Controllers/assignController.js';

const router = express.Router();

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/assign', upload.single('document'), assignIntern);
router.get('/task',Tasks);
router.get('/viewtask/:id',ViewTasks);




export default router;
