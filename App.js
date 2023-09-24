import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListTrails from './ListTrails';
import CreateTrail from './CreateTrail';
import UpdateTrail from './UpdateTrail';
import DeleteTrail from './DeleteTrail';

function App() {
  return (
    <div className="App">
    <ListTrails />
    <CreateTrail />
    <UpdateTrail />
    <DeleteTrail />
    </div>
  );
}

export default App;
