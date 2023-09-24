// CreateTrail.js
import React, { useState } from 'react';
import { createTrail } from './apiService';

const CreateTrail = () => {
  const [formData, setFormData] = useState({ name: '', difficulty: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTrail = await createTrail(formData);
      console.log('New trail created:', newTrail);
      // Reset the form after successful creation
      setFormData({ name: '', difficulty: '' });
    } catch (error) {
      console.error('Error creating trail:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Hiking Trail</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>
        <button type="submit">Create Trail</button>
      </form>
    </div>
  );
};

export default CreateTrail;
