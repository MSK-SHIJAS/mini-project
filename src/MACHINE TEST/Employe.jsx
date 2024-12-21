import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Form, Button, Modal, Card, Row, Col, Container } from 'react-bootstrap';

const Employee = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);  // To track if you're updating or adding
const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    designation: '',
    dateOfJoining: '',
    salary: '',
    image: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const API_URL = 'http://localhost:4000/employee/emp';

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('department', formData.department);
    formDataToSubmit.append('designation', formData.designation);
    formDataToSubmit.append('dateOfJoining', formData.dateOfJoining);
    formDataToSubmit.append('salary', formData.salary);
    if (formData.image) {
      formDataToSubmit.append('image', formData.image);  
    }
  
    try {
      if (isUpdate) {
        // Update employee
        await axios.put(`http://localhost:4000/employee/emp/${selectedEmployee._id}`, formDataToSubmit);
      } else {
        // Add new employee
        await axios.post('http://localhost:4000/employee/emp', formDataToSubmit);
      }
      fetchEmployees(); 
      setShowAddModal(false);
    } catch (error) {
      console.error("Error submitting employee:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      // Trigger search
      try {
        const response = await axios.get('http://localhost:4000/employee/search', { params: { search: value } });
        setEmployees(response.data);
      } catch (error) {
        console.error('Error during search:', error);
      }
    } else {
      setEmployees([]);  
    }
  };

  const handleViewEmployee = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/employee/emp/${id}`); 
      setSelectedEmployee(response.data);
      setShowViewModal(true);
    } catch (error) {
      console.error('Error fetching employee details:', error);
    }
  };

  const handleUpdateEmployee = (employee) => {
    console.log("Selected Employee for Update: ", employee); 
    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      department: employee.department,
      designation: employee.designation,
      dateOfJoining: employee.dateOfJoining,
      salary: employee.salary,
      image: employee.image, 
    });
    setSelectedEmployee(employee); 
    setShowUpdateModal(true); 
  };
  

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowViewModal(false);
    setShowUpdateModal(false);
  };

  return (
    <div>
      <Navbar bg="light" className="justify-content-center p-3">
        <Form inline className="w-50">
          <Form.Control
            type="text"
            placeholder="Search"
            className="w-100"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form>
      </Navbar>

      <Container className="text-center my-3">
        <Button variant="primary" onClick={handleShowAddModal}>
          Add Employee
        </Button>
      </Container>

      {/* Add Employee Modal */}
      <Modal show={showAddModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* View Employee Modal */}
      <Modal show={showViewModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <Card>
              <Card.Body>
                <Card.Img
                  src={`http://localhost:4000/${selectedEmployee.image}`}
                  alt={selectedEmployee.firstName}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: 'auto',
                  }}
                />
                <Card.Title>
                  {selectedEmployee.firstName} {selectedEmployee.lastName}
                </Card.Title>
                <Card.Text>Department: {selectedEmployee.department}</Card.Text>
                <Card.Text>Designation: {selectedEmployee.designation}</Card.Text>
                <Card.Text>Date of Joining: {selectedEmployee.dateOfJoining}</Card.Text>
                <Card.Text>Salary: ${selectedEmployee.salary}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Employee Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="p-4">
        <Row>
          {employees.map((employee) => (
            <Col md={3} key={employee._id} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{employee.firstName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {employee.lastName}
                  </Card.Subtitle>
                  {employee.image && (
                    <Card.Img
                      variant="top"
                      src={`http://localhost:4000/${employee.image}`}
                      style={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        margin: 'auto',
                      }}
                    />
                  )}
                  <div className="d-flex justify-content-center my-2">
                    <Button
                      variant="warning"
                      className="mx-1"
                      onClick={() => handleUpdateEmployee(employee)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="info"
                      className="mx-1"
                      onClick={() => handleViewEmployee(employee._id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="danger"
                      className="mx-1"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </Button>
                  </div>
                  <Row>
                    <Col>
                      <p>DEPARTMENT: {employee.department}</p>
                      <p>DESIGNATION: {employee.designation}</p>
                    </Col>
                    <Col>
                      <p>SALARY: ${employee.salary}</p>
                      <p>DATE: {employee.dateOfJoining}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Employee;
