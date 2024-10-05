import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Trainerdash from './Trainerdash';

const Trainernav = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#">WELCOME TRAINER</Navbar.Brand>
</Container>
</Navbar>
<div className='d-flex'>

<Trainerdash/>
<Outlet/>
</div>
</div>
  )
}

export default Trainernav
