import React, { useState, useEffect } from 'react';
import { Button, Table, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Trainerinterns = () => {
  const [interns, setInterns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [deadline, setDeadline] = useState('');
  const [document, setDocument] = useState(null);
  const [notes, setNotes] = useState('');
  const [link, setLink] = useState('');
  const [selectedInterns, setSelectedInterns] = useState([]);

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await axios.get('http://localhost:4000/viewtrainer/viewintern');
      setInterns(response.data);
    } catch (error) {
      console.error('Error fetching interns:', error);
    }
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleAssignClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('question', question);
    formData.append('deadline', deadline);
    formData.append('document', document);
    formData.append('notes', notes);
    formData.append('link', link);
    formData.append('internId', selectedInterns);

    try {
      const response = await axios.post('http://localhost:4000/assign/assign', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data saved successfully:', response.data);
      setQuestion('');
      setDeadline('');
      setDocument(null);
      setNotes('');
      setLink('');
      setSelectedInterns([]);
      setShowModal(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDocumentChange = event => {
    setDocument(event.target.files[0]);
  };

  const handleCheckboxChange = (internId) => {
    setSelectedInterns((prevSelectedInterns) => {
      if (prevSelectedInterns.includes(internId)) {
        return prevSelectedInterns.filter(id => id !== internId);
      } else {
        return [...prevSelectedInterns, internId];
      }
    });
  };

  const filteredInterns = interns.filter(intern =>
    intern.name && intern.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>INTERNS</h2>
      <div className="d-flex justify-content-between mb-3">
        <InputGroup className="w-50">
          <FormControl
            placeholder="Search Interns"
            aria-label="Search Interns"
            aria-describedby="search-icon"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <InputGroup.Text id="search-icon">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
        <Button variant="success" onClick={handleAssignClick}>
          Assign
        </Button>
      </div>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Course</th>
            <th>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {filteredInterns.map((intern) => (
            <tr key={intern._id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(intern._id)}
                />
              </td>
              <td>{intern.name}</td>
              <td>{intern.course}</td>
              <td>{intern.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formQuestion">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter question"
                value={question}
                onChange={e => setQuestion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDocument">
              <Form.Label>Upload Document</Form.Label>
              <Form.Control
                type="file"
                onChange={handleDocumentChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLink">
              <Form.Label>Add Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link"
                value={link}
                onChange={e => setLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Trainerinterns;
