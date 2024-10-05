import React from 'react'
import Nav from 'react-bootstrap/Nav';


const AdminDash = () => {
  return (
    <div>
      <Nav className="flex-column" style={{width:"100px"}}>
      <Nav.Link href="/admin/adminstatus">TRAINERS</Nav.Link>
      <Nav.Link href="/admin/assigntrainer">INTERNS</Nav.Link>
      <Nav.Link href="/admin">COURSE</Nav.Link>
    </Nav>
    </div>
  )
}

export default AdminDash
