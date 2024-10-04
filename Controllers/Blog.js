import express from 'express';

import BlogReg from '../Models/BlogRegister.js';
import Blogcreate from '../Models/BlogPost.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null, uniqueSuffix);
    }
  });
  export const upload = multer({ storage: storage });




export const Blog = async (req, res) => {
        try {
          let newdata = new BlogReg(req.body);
          let response = await newdata.save();
          console.log(response);
        } catch (error) {
          res.status(500).json({ message: 'Error registering', error });
        }
      };


      export const Login = async (req, res) => {
        try {
          let user = await BlogReg.findOne({ username: req.body.username, password: req.body.password });
          console.log(user);
          if (!user) {
            return res.status(401).json('User invalid');
          }
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: 'Error logging in', error });
        }
      };

      export const Blogpost = async (req, res) => {
        try {
          let newdata = new Blogcreate(req.body);
          let response = await newdata.save();
          console.log(response);
        } catch (error) {
          res.status(500).json({ message: 'Error registering', error });
        }
      };

      
