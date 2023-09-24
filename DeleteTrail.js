// DeleteTrail.js
import React, { useState } from 'react';
import { deleteTrail } from './apiService';

const DeleteTrail = () => {
  const [trailId, setTrailId] = useState('');
  const [deletedTrail, setDeletedTrail] = useState(null);
  const [error, setError] = useState(null);

  const handleTrailIdChange = (e) => {
    setTrailId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const deleted = await deleteTrail(trailId);
      setDeletedTrail(deleted);
      setError(null);
      // Reset the trailId input field after successful deletion
      setTrailId('');
    } catch (err) {
      setError('Trail not found or error occurred.');
      setDeletedTrail(null);
    }
  };

  return (
    <div>
      <h2>Delete Hiking Trail</h2>
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
      <button onClick={handleDelete}>Delete Trail</button>
      {deletedTrail && (
        <p>
          Trail with ID {deletedTrail.id} - {deletedTrail.name} was deleted.
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default DeleteTrail;
