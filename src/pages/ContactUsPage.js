import React from 'react';
import FallingMatrix from '../components/FallingMatrix.jsx';
import Navbar from '../components/NavBar.jsx';
import { Leads } from '../components/Leads.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Footer from '../components/Footer';

function ContactUsPage() {
  return (
    <div>
      <FallingMatrix />
      <Navbar />
      <Leads />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default ContactUsPage;
