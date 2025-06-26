import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Story from './Story.jsx'; // or './Levels/Level1.jsx' if it's inside a folder

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Story" element={<Story />} />
    </Routes>
  );
};

export default App;
