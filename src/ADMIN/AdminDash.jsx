import React from 'react'
import Nav from 'react-bootstrap/Nav';


const AdminDash = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">TRAINERS</Nav.Link>
      <Nav.Link href="/home">INTERNS</Nav.Link>
      <Nav.Link href="/admin/course">COURSE</Nav.Link>
    </Nav>
    </div>
  )
}

export default AdminDash
