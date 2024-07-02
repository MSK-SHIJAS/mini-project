import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

const Navbars = () => {
  return (
  <>
    <Navbar bg="primary" data-bs-theme="dark" className='fw-bold'>
    <Container>
      <Navbar.Brand href="#home" >MSK</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Nav>
        <NavDropdown title="REGISTER" id='register' className='text-white'>
        <NavDropdown.Item href='/login'>ADMIN</NavDropdown.Item>
        <NavDropdown.Item href='/internregister'>INTERN</NavDropdown.Item>
        <NavDropdown.Item href='/trainerregister'>TRAINER</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
  <Outlet/>
  </>
  )
}

export default Navbars
