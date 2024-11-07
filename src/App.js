import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DomainPage from './pages/DomainPage'; // Import the DomainPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/domain/:domainId" element={<DomainPage />} /> {/* Add route for domain pages */}
      </Routes>
    </Router>
  );
}

export default App;
