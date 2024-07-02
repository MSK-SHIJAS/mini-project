import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import AdminDash from './AdminDash';

const AdminNav = () => {
  return (
    <>
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">WELCOME ADMIN</Navbar.Brand>
      </Container>
    </Navbar>
    <AdminDash />
    <Outlet/>
    </div>
    </>
  )
}

export default AdminNav
