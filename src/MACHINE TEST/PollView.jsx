import React from 'react';
import { Table, Button } from 'react-bootstrap';

const PollView = () => {
  return (
    <div>
      <h1>ANSWERS</h1>
      <Table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>country</td>
            <td>India</td>
            <td><Button variant="primary">Edit</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PollView;
