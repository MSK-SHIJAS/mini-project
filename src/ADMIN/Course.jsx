import React from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

const Course = () => {
  return (
    <div style={{marginTop:'-100px'}} className='ms-5'>
       <Container>
      <Form>
        <Form.Group controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" placeholder="Enter course name" />
        </Form.Group>
        <Form.Group controlId="syllabusFile" className="mt-3">
          <Form.Label>Syllabus</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button className="mt-3">Add</Button>
      </Form>

      <h2 className="mt-5">Course</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Syllabus</th>
            <th>Number of Students</th>
            <th>Number of Trainers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Course</td>
            <td>sample-syllabus.pdf</td>
            <td>10</td>
            <td>2</td>
            <td>
              <Button variant="warning" className="me-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  )
}

export default Course



















// import React, { useState } from 'react';
// import { Container, Form, Button, Table } from 'react-bootstrap';


// const Course = () => {

//     const [courseName, setCourseName] = useState('');
//     const [syllabusFile, setSyllabusFile] = useState(null);
//     const [courses, setCourses] = useState([]);
  
//     const handleAddCourse = () => {
//       if (courseName && syllabusFile) {
//         setCourses([
//           ...courses,
//           { name: courseName, syllabus: syllabusFile.name, students: 0, trainers: 0 }
//         ]);
//         setCourseName('');
//         setSyllabusFile(null);
//       }
//     };
  
//     const handleDeleteCourse = (index) => {
//       const updatedCourses = courses.filter((_, i) => i !== index);
//       setCourses(updatedCourses);
//     };

//   return (
//     <div>
//     <Container className="mt-5">
//       <Form>
//         <Form.Group controlId="courseName">
//           <Form.Label>Course Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter course name"
//             value={courseName}
//             onChange={(e) => setCourseName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="syllabusFile" className="mt-3">
//           <Form.Label>Syllabus</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(e) => setSyllabusFile(e.target.files[0])}
//           />
//         </Form.Group>
//         <Button className="mt-3" onClick={handleAddCourse}>
//           Add
//         </Button>
//       </Form>

//       <h2 className="mt-5">Course</h2>
//       <Table striped bordered hover className="mt-3">
//         <thead>
//           <tr>
//             <th>Course Name</th>
//             <th>Syllabus</th>
//             <th>Number of Students</th>
//             <th>Number of Trainers</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course, index) => (
//             <tr key={index}>
//               <td>{course.name}</td>
//               <td>{course.syllabus}</td>
//               <td>{course.students}</td>
//               <td>{course.trainers}</td>
//               <td>
//                 <Button variant="warning" className="me-2">Edit</Button>
//                 <Button variant="danger" onClick={() => handleDeleteCourse(index)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//     </div>
//   )
// }

// export default Course
