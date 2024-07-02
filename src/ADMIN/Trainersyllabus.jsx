import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const Trainersyllabus = () => {
  return (
    <div>
    <Container>
  <h2 className='mt-5'>TRAINER</h2>
  <Table>
      <thead>
          <tr>
              <th>NAME</th>
              <th>COURSE</th>
              <th>DATE JOINED</th>
              <th>STATUS ASSIGNED</th>
              <th>ACTION</th> 
              </tr>
          </thead>
        <tbody>
          <tr>
            <td>RAJEEV</td> 
            <td>cs</td>
            <td>30</td>
            <td>ACCEPT</td>
            <td><Button variant='warning' className='me-2'>ASSIGN</Button></td>  
            </tr></tbody>  
  </Table>
    </Container>
  </div>
  )
}

export default Trainersyllabus
