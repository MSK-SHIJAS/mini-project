import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignTrainer = () => {
  const [assigntrainer, setAssignTrainer] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInternId, setSelectedInternId] = useState(null);
  const [selectedTrainerId, setSelectedTrainerId] = useState('');

  // Fetch interns and trainers data
  useEffect(() => {
    const fetchAssignTrainer = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewtrainer/viewintern');
        setAssignTrainer(response.data);
      } catch (error) {
        console.error('Error fetching assigntrainer:', error);
      }
    };

    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewtrainer/viewtrainer');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchAssignTrainer();
    fetchTrainers();
  }, []);

  // Handle accepting an intern
  const handleAccept = async (id) => {
    try {
      await axios.post(`http://localhost:4000/assigntrainer/viewintern/accept/${id}`);
      setAssignTrainer((prev) =>
        prev.map((intern) => (intern._id === id ? { ...intern, status: 'ACCEPTED' } : intern))
      );
    } catch (error) {
      console.error('Error accepting intern:', error);
    }
  };

  // Handle rejecting an intern
  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:4000/assigntrainer/viewintern/reject/${id}`);
      setAssignTrainer((prev) =>
        prev.map((intern) => (intern._id === id ? { ...intern, status: 'REJECTED' } : intern))
      );
    } catch (error) {
      console.error('Error rejecting intern:', error);
    }
  };

  // Handle assigning a trainer to an intern
  const handleAssign = async () => {
    try {
      await axios.post(`http://localhost:4000/assigntrainer/assign/${selectedInternId}`, {
        trainerId: selectedTrainerId,
      });

      // Refetch the data to ensure the updated status is reflected
      const response = await axios.get('http://localhost:4000/viewtrainer/viewintern');
      setAssignTrainer(response.data);
      
      setShowModal(false); // Close the modal after assignment
    } catch (error) {
      console.error('Error assigning trainer:', error);
    }
  };

  // Handle showing the modal for assigning a trainer
  const handleShowModal = (internId) => {
    setSelectedInternId(internId);
    setShowModal(true);
  };

  return (
    <div style={{ marginTop: '-110px' }} className='ms-5'>
      <Container>
        <h2 className='mt-5'>INTERN</h2>
        <Table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>COURSE</th>
              <th>DATE JOINED</th>
              <th>FEES PAID</th>
              <th>STATUS</th>
              {/* <th>TRAINER</th> */}
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {assigntrainer.map((intern) => (
              <tr key={intern._id}>
                <td>{intern.name}</td>
                <td>{intern.course}</td>
                <td>{intern.date}</td>
                <td>{intern.feesPaid}</td>
                <td>{intern.status}</td>
                {/* <td>{intern.trainer ? intern.trainer.name : 'Not Assigned'}</td> */}
                <td>
                  {intern.status !== 'ACCEPTED' && intern.status !== 'REJECTED' && (
                    <>
                      <Button variant='warning' className='me-2' onClick={() => handleAccept(intern._id)}>ACCEPT</Button>
                      <Button variant='danger' className='me-2' onClick={() => handleReject(intern._id)}>REJECT</Button>
                    </>
                  )}
                  {(intern.status === 'ACCEPTED' || intern.status === 'ASSIGNED') && (
                    <Button variant='primary' onClick={() => handleShowModal(intern._id)}>ASSIGN</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Trainer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formTrainerSelect'>
                <Form.Label>Select Trainer</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedTrainerId}
                  onChange={(e) => setSelectedTrainerId(e.target.value)}
                >
                  <option value=''>Select a trainer</option>
                  {trainers.map((trainer) => (
                    <option key={trainer._id} value={trainer._id}>
                      {trainer.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowModal(false)}>Close</Button>
            <Button variant='primary' onClick={handleAssign}>Assign Trainer</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default AssignTrainer;
