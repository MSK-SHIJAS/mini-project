import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InternQuestion = () => {
  const [questionDetails, setQuestionDetails] = useState({});
  const [answer, setAnswer] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/answer/viewquestion/${id}`);
        setQuestionDetails(response.data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleSendAnswer = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/answer/sendanswer/${id}`, {
        internId: id,
        answer,
        question: questionDetails.question // Include the question here
      });
      console.log('Answer sent:', response.data);
      setAnswer('');
    } catch (error) {
      console.error('Error sending answer:', error);
    }
  };

  return (
    <div className='mx-auto mt-5'>
      <h2>Question Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Field</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Question</td>
            <td>{questionDetails.question}</td>
          </tr>
          <tr>
            <td>Deadline</td>
            <td>{questionDetails.deadline}</td>
          </tr>
          <tr>
            <td>Document</td>
            <td>{questionDetails.document}</td>
          </tr>
          <tr>
            <td>Link</td>
            <td>{questionDetails.link}</td>
          </tr>
        </tbody>
      </Table>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSendAnswer}>Send Answer</button>
    </div>
  );
}

export default InternQuestion;
