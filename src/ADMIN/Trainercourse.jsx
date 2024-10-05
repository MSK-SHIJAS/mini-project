import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios';


const Trainercourse = () => {

  const [intern, setIntern] = useState([]);
  
  useEffect(() => {
    const fetchIntern = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewintern/viewintern');
        setIntern(response.data);
      } catch (error) {
        console.error('Error fetching interns:', error);
      }
    };

    fetchIntern();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.post(`http://localhost:4000/viewtrainer/viewtrainer/accept/${id}`);
      setIntern((prev) =>
        prev.map((intern) => (intern._id === id ? { ...intern, status: 'ACCEPTED' } : intern))
      );
    } catch (error) {
      console.error('Error accepting trainer:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:4000/viewtrainer/viewtrainer/reject/${id}`);
      setIntern((prev) =>
        prev.map((intern) => (intern._id === id ? { ...intern, status: 'REJECTED' } : intern))
      );
    } catch (error) {
      console.error('Error rejecting trainer:', error);
    }
  };


  return (
    <div style={{marginTop:'-110px'}} className='ms-5'>
      <Container>
    <h2 className='mt-5'>INTERNS</h2>
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
            {intern.map((item) => (
              <tr key={item.intern._id}>
                <td>{item.intern.name}</td>
                <td>{item.intern.course}</td>
                <td>{item.intern.contact}</td>
                <td>{item.intern.email}</td>
                <td>{item.intern.status}</td>
                <td>
                  <Button
                    variant='warning'
                    className='me-2'
                    onClick={() => handleAccept(intern._id)}
                    disabled={intern.status === 'ACCEPTED'}
                  >
                    ACCEPT
                  </Button>
                  <Button
                    variant='danger'
                    className='me-2'
                    onClick={() => handleReject(intern._id)}
                    disabled={intern.status === 'REJECTED'}
                  >
                    REJECT
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
                   
    </Table>
      </Container>
    </div>
   
  )
}

export default Trainercourse
