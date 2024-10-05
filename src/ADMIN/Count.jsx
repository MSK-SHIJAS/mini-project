import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from './Course'; // Assuming Course is in the same directory

const Count = ({ courseName }) => {
  const [interns, setInterns] = useState(0);
  const [trainers, setTrainers] = useState(0);

  // Fetch interns and trainers count based on course name from API
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const internsResponse = await axios.get(`http://localhost:4000/interns/count?courseName=${courseName}`);
        const trainersResponse = await axios.get(`http://localhost:4000/trainers/count?courseName=${courseName}`);
        setInterns(internsResponse.data.count); // Assuming the API response has a 'count' field
        setTrainers(trainersResponse.data.count); // Assuming the API response has a 'count' field
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, [courseName]);

  return (
    <div>
      <Course interns={interns} trainers={trainers} />
    </div>
  );
};

export default Count;
