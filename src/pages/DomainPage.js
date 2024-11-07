import React from 'react';
import { useParams } from 'react-router-dom';

const DomainPage = () => {
  const { domainId } = useParams(); // Extract the domain ID from the URL

  return (
    <div>
      <h1>Details of {domainId}</h1>
      <p>This is the page for the {domainId} domain.</p>
      {/* Here, you can add more detailed content or fetch specific information based on domainId */}
    </div>
  );
};

export default DomainPage;
