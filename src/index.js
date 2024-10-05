import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminNav from './ADMIN/AdminNav';
import Course from './ADMIN/Course';
import AdminDash from './ADMIN/AdminDash';
import Navbars from './Navbars';
import Trainer from './ADMIN/Trainer';
import Trainercourse from './ADMIN/Trainercourse';
import Trainersyllabus from './ADMIN/Trainersyllabus';
import Trainernav from './TRAINER/Trainernav';
import Trainerdash from './TRAINER/Trainerdash';
import Trainerregister from './TRAINER/Trainerregister';
import Trainerinterns from './TRAINER/Trainerinterns';
import Trainertask from './TRAINER/Trainertask';
import Interntask from './INTERN/Interntask';
import Internregister from './INTERN/Internregister';
import 'react-toastify/dist/ReactToastify.css';
import Internnav from './INTERN/Internav';
import AssignTrainer from './ADMIN/AssignTrainer';
import TrainerViewtask from './TRAINER/TrainerViewtask';
import InternQuestion from './INTERN/InternQuestion';
import ViewIntern from './TRAINER/ViewIntern';
import BlogLogin from './MACHINE TEST/BlogLogin';
import BlogRegister from './MACHINE TEST/BlogRegister';
import Blog from './MACHINE TEST/Blog';

import ViewTrainer from './INTERN/ViewTrainer';
import PollLogin from './MACHINE TEST/PollLogin';
import PollHome from './MACHINE TEST/PollHome';
import PollView from './MACHINE TEST/PollView';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navbars />}>
          <Route index element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='internregister' element={<Internregister />} />
          <Route path='trainerregister' element={<Trainerregister />} />
        </Route>

        <Route path='/admin' element={<AdminNav/>}>
          <Route index element={<Course />} />
          <Route path='adminstatus' element={<Trainer />} />
          <Route path='admincourse' element={<Trainercourse />} />
          <Route path='assigntrainer' element={<AssignTrainer />} />
          <Route path='adminsyllabus' element={<Trainersyllabus />} />
        </Route>

        <Route path='/trainer' element={<Trainernav />}>
        <Route index element={<Trainerinterns />} />
        <Route path='trainertask' element={<Trainertask />}/>
        <Route path='trainerviewtask/:id' element={<TrainerViewtask />}/>
        <Route path='viewintern' element={<ViewIntern />}/>
        </Route>

        <Route path='/intern' element={<Internnav />}>
        <Route index element={<Interntask />} />
        <Route path='internquestion/:id' element={<InternQuestion />}/>
        <Route path='viewtrainer' element={<ViewTrainer />}/>
        </Route> */}


        {/* MACHINE TEST */}
        <Route path='/' element={<PollLogin />}/>
        <Route path='pollhome' element={<PollHome />}/>
        <Route path='pollview' element={<PollView />}/>
        {/* <Route path='/login' element={<BlogLogin />}/>
        <Route path='/blog' element={<Blog />}/> */}

       

      </Routes>
    </BrowserRouter> 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
