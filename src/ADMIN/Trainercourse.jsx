import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const Trainercourse = () => {
  return (
       <div>
      <Container>
    <h2 className='mt-5'>TRAINER</h2>
    <Table>
        <thead>
            <tr>
                <th>NAME</th>
                <th>COURSE</th>
                <th>CONTACT</th>
                <th>EMAIL</th>
                <th>STATUS</th>
                <th>COURSE</th>
                </tr>
            </thead>
          <tbody>
            <tr>
              <td>RAJEEV</td> 
              <td>cs</td>
              <td>897452</td>
              <td>MSK@GMAIL</td>
              <td>ACCEPT</td>
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

export default Trainercourse
