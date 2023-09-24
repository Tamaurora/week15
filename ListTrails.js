// ListTrails.js
import React, { useEffect, useState } from 'react';
import { getAllTrails } from './apiService';

const ListTrails = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTrails();
      setTrails(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Hiking Trails</h2>
      <ul>
        {trails.map((trail) => (
          <li key={trail.id}>
            {trail.name} - Difficulty: {trail.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTrails;
