import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import DomainPage from './pages/DomainPage'; // Import the DomainPage component
import ScrollToTop from './components/ScrollTop';

function ScrollToDomainCards() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/domains') {
      const domainCardsSection = document.getElementById('domain-cards');
      if (domainCardsSection) {
        domainCardsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToDomainCards /> {/* Handles scrolling to domain cards */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/domain/:domainId" element={<DomainPage />} />
        <Route path="/domains" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
