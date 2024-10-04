import express from 'express';
import multer from 'multer';
import { addCourse, getCourses,deletecourse, updatecourse } from '../Controllers/auth.js';
import { ViewIntern } from '../Controllers/Intern.js';

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });


router.post('/addsyllabus', upload.single('syllabus'), addCourse);
router.get('/viewcourse', getCourses);
router.delete('/deletecourse/:id', deletecourse);
router.put('/updatecourse/:id', upload.single('syllabus'),updatecourse);

router.get('/viewintern', ViewIntern);








export default router;
