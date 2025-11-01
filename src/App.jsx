import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CertificationShowcase from './CertificationShowcase';
import './style.css';

function App() {
  return (
    <BrowserRouter basename="/vetrivelsde">
      <Routes>
        <Route path="/" element={<CertificationShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
