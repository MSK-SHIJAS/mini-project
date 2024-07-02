import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Trainerdash = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/trainer">INTERNS</Nav.Link>
      <Nav.Link href="/trainer/trainertask">TASK</Nav.Link>
    </Nav>
    </div>
  )
}

export default Trainerdash
