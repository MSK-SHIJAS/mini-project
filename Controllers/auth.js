import express from 'express';
import multer from 'multer';
import Course from '../Models/Course.js';
import Intern from '../Models/InternRegister.js';
import Trainer from '../Models/TrainerRegister.js';
import User from '../Models/users.js';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use the current timestamp for a unique filename
  }
});

const upload = multer({ storage: storage });


// Trainer Registration with Photo Upload
export const trainerRegister = async (req, res) => {
  try {
    const { name, date, course, contact, email, username, password } = req.body;
    const photo = req.file ? req.file.path : null; // Check if photo is uploaded and store its path

    const newTrainer = new Trainer({ name, date, course, contact, email, username, password, photo });
    const response = await newTrainer.save();

    const user = new User({ username, password, userType: 'trainer', userId: response._id });
    const response1 = await user.save();

    console.log(response1);
    res.status(201).json(response1);
  } catch (error) {
    res.status(500).json({ message: 'Error registering trainer', error });
  }
};


// Intern Registration with Photo Upload
export const internRegister = async (req, res) => {
  try {
    const { name, date, course, contact, email, username, password } = req.body;
    const photo = req.file ? req.file.path : null;

    const newIntern = new Intern({ name, date, course, contact, email, username, password, photo });
    const response = await newIntern.save();

    const user = new User({ username, password, userType: 'intern', userId: response._id });
    const response1 = await user.save();

    console.log(response1);
    res.status(201).json(response1);
  } catch (error) {
    res.status(500).json({ message: 'Error registering intern', error });
  }
};

// Admin Registration
export const adminRegister = async (req, res) => {
  try {
    let user = new User({ ...req.body, userType: 'admin' });
    let response = await user.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error registering admin', error });
  }
};

// User Login
export const Login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username, password: req.body.password });
    console.log(user);
    if (!user) {
      return res.status(401).json('User invalid');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Add Course
export const addCourse = async (req, res) => {
  try {
    const { courseName } = req.body;
    const syllabus = req.file ? req.file.path : null;

    if (!courseName || !syllabus) {
      return res.status(400).json({ error: 'Course name and syllabus are required' });
    }

    const course = new Course({ courseName, syllabus });
    let response = await course.save();
    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Course
export const deletecourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};

// Update Course
export const updatecourse = async (req, res) => {
  try {
    const { courseName } = req.body;
    const syllabus = req.file ? req.file.path : req.body.syllabus;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { courseName, syllabus },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};
