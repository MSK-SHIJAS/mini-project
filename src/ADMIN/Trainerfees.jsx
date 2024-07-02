import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const Trainerfees = () => {
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
              <th>FEES PAYED</th>
              <th>TRAINER</th>
              <th>ACTION</th>
              </tr>
          </thead>
        <tbody>
          <tr>
            <td>RAJEEV</td> 
            <td>cs</td>
            <td>30</td>
            <td>5000</td>
            <td><Button variant='warning' className='me-2'>ASSIGN</Button></td>
            <td>
              <Button variant='warning' className='me-2'>DELETE</Button>
            </td>     
            </tr></tbody>  
  </Table>
    </Container>
  </div>
  )
}

export default Trainerfees
