import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Level1 from './Levels/Level1.jsx'; // or './Levels/Level1.jsx' if it's inside a folder

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/level1" element={<Level1 />} />
    </Routes>
  );
};

export default App;
