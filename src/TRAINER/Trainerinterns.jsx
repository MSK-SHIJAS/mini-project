import React, { useState } from 'react';
import { Button, Modal, Form, Table, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Trainerinterns = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-4">
        <h2>INTERNS</h2>
      <div className="d-flex justify-content-between mb-3">
        <InputGroup className="w-50">
          <FormControl
            placeholder="Search Interns"
            aria-label="Search Interns"
            aria-describedby="search-icon"
          />
          <InputGroup.Text id="search-icon">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
        <Button variant="success" onClick={handleShow}>
          Assign
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formQuestion">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter question" />
            </Form.Group>

            <Form.Group controlId="formDeadline" className="mt-3">
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formUpload" className="mt-3">
              <Form.Label>Upload Document</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formNotes" className="mt-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formLink" className="mt-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="url" placeholder="Enter link" />
            </Form.Group>

            <Button variant="success" className="mt-4" type="submit">
              Assign
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

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
          {/* Sample data, replace with your actual data */}
          <tr>
            <td><Form.Check type="checkbox" /></td>
            <td>John Doe</td>
            <td>Web Development</td>
            <td>2024-01-15</td>
          </tr>
          <tr>
            <td><Form.Check type="checkbox" /></td>
            <td>Jane Smith</td>
            <td>Data Science</td>
            <td>2024-02-20</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Trainerinterns;
