import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const Internnav = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#">WELCOME TNTERN</Navbar.Brand>
</Container>
</Navbar>
<div className='d-flex'>
<Outlet/>
</div>
</div>
  )
}

export default Internnav
