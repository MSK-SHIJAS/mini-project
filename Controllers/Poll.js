import express from 'express';
import User from '../Models/PollReg.js';


// Admin Registration
export const adminRegister = async (req, res) => {
    try {
      let user = new User({ ...req.body });
      let response = await user.save();
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Error registering admin', error });
    }
  };

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

