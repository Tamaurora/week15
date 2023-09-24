// UpdateTrail.js
import React, { useState } from 'react';
import { updateTrail } from './apiService';

const UpdateTrail = () => {
  const [trailId, setTrailId] = useState('');
  const [formData, setFormData] = useState({ name: '', difficulty: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrailIdChange = (e) => {
    setTrailId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTrail = await updateTrail(trailId, formData);
      console.log('Trail updated:', updatedTrail);
      // Reset the form after successful update
      setTrailId('');
      setFormData({ name: '', difficulty: '' });
    } catch (error) {
      console.error('Error updating trail:', error);
    }
  };

  return (
    <div>
      <h2>Update Hiking Trail</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="trailId">Trail ID:</label>
          <input
            type="text"
            id="trailId"
            name="trailId"
            value={trailId}
            onChange={handleTrailIdChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">New Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="difficulty">New Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>
        <button type="submit">Update Trail</button>
      </form>
    </div>
  );
};

export default UpdateTrail;
