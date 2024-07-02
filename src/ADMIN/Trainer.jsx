import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const Trainer = () => {
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
                <th>STATUS</th>
                <th>ACTION</th>
                </tr>
            </thead>
          <tbody>
            <tr>
              <td>RAJEEV</td> 
              <td>cs</td>
              <td>ACCEPTED</td>
              <td>ACCEPTED</td>
              <td>
                <Button variant='warning' className='me-2'>ACCEPT</Button>
                <Button variant='danger' className='me-2'>REJECT</Button>
              </td>     
              </tr></tbody>  
    </Table>
      </Container>
    </div>
  )
}

export default Trainer
