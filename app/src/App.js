import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Note the changes here
import Home from './Home';
import Patient from './Patient';
import Login from './Login';
import Options from './Options';
import Add from './AddData.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Login />} />
          <Route path="/options" element={<Options />} />
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;