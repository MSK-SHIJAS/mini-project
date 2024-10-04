import { Blog } from "../Controllers/Blog.js";
import { Login } from "../Controllers/Blog.js";
import { Blogpost } from "../Controllers/Blog.js";
import express from 'express';

const router = express.Router();

router.post('/BlogRegister', Blog);
router.post('/BlogLogin', Login);
router.post('/Blogpost', Blogpost);




export default router;