
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CertificationShowcase from './CertificationShowcase';
// import LinkedInCallback from './LinkedInCallback';
import './style.css'; // Tailwind styles


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CertificationShowcase />} />
        {/* <Route path="/linkedin/callback" element={<LinkedInCallback />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
