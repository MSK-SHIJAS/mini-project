import express from 'express';
import {
  addEmployee,
  getEmployeeById,
  getAllEmployees,
  searchEmployees,
  updateEmployee,
  deleteEmployee,
} from '../Controllers/Employee.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/emp', upload.single("image"), addEmployee);
router.get('/emp', getAllEmployees);
router.get('/emp/:id', getEmployeeById);
router.get('/search', searchEmployees);
router.put('/emp/:id', upload.single("image"), updateEmployee);
router.delete('/emp/:id', deleteEmployee);

export default router;
