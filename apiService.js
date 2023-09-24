// apiService.js
const mockData = [
  { id: 1, name: 'Trail 1', difficulty: 'Easy' },
  { id: 2, name: 'Trail 2', difficulty: 'Moderate' },
  { id: 3, name: 'Trail 3', difficulty: 'Difficult' },
];

let nextId = 4;

export const getAllTrails = () => {
  return Promise.resolve(mockData);
};

export const createTrail = (data) => {
  const newTrail = { ...data, id: nextId++ };
  mockData.push(newTrail);
  return Promise.resolve(newTrail);
};

export const updateTrail = (id, data) => {
  const index = mockData.findIndex((trail) => trail.id === id);
  if (index !== -1) {
    mockData[index] = { ...mockData[index], ...data };
  }
  return Promise.resolve(mockData[index]);
};

export const deleteTrail = (id) => {
  const index = mockData.findIndex((trail) => trail.id === id);
  if (index !== -1) {
    const deletedTrail = mockData.splice(index, 1);
    return Promise.resolve(deletedTrail[0]);
  }
  return Promise.reject(new Error('Trail not found'));
};
