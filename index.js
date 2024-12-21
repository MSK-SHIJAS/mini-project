import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RegisterRoutes from './Roots/RegisterRoutes.js';
import adminRouter from './Roots/RegisterRoutes.js';
import ViewTrainer from './Roots/ViewRoutes.js';
import Assigntrainers from './Roots/ViewRoutes.js';
import addcourse from './Roots/Addcourse.js';
import assignRouter from './Roots/assignRoutes.js'; // Import the new routes
import saveSelectedInternsRouter from './Roots/assignRoutes.js'; // Import the new routes
import Tasks from './Roots/assignRoutes.js'; // Import the new routes
import ViewTasks from './Roots/assignRoutes.js'; // Import the new routes
import viewQuestion from './Roots/Internroutes.js'; // Import the new routes
import answer from './Roots/Internroutes.js'; // Import the new routes
import BlogRegister from './Roots/Blog.js'; // Import the new routes
import BlogLogin from './Roots/Blog.js'; // Import the new routes
import Blogcreate from './Roots/Blog.js'; // Import the new routes
import Poll from './Roots/Poll.js';
import Tasklist from './Roots/Taklist.js';
import Book from './Roots/Books.js';
import Employee from './Roots/Employe.js';


const app = express();
app.use('/uploads',express.static('uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/InternTrackingSystem')
  .then(() => console.log('Connected!'));

const db = mongoose.connection;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/auth', RegisterRoutes);
app.use('/admin', adminRouter);
app.use('/viewtrainer', ViewTrainer);
app.use('/assigntrainer', Assigntrainers);
app.use('/addcourse', addcourse);
app.use('/assign', assignRouter); // Use the new routes
app.use('/task', Tasks); // Use the new routes

app.use('/viewtask', ViewTasks); // Use the new routes
app.use('/viewquestion',viewQuestion); // Use the new routes

app.use('/answer',answer); // Use the new routes

app.use('/BlogRegister',BlogRegister)
app.use('/BlogLogin',BlogLogin)
app.use('/Blogpost',Blogcreate)


app.use('/Poll',Poll)

app.use('/tasklist',Tasklist)
app.use('/books',Book)

app.use('/employee',Employee)

app.listen(4000, () => {
  console.log('running');
});
