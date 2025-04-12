import React from 'react';

const HomePage = () => {
  const properties = [
    { id: 1, name: 'Property A', location: 'City X' },
    { id: 2, name: 'Property B', location: 'City Y' },
    { id: 3, name: 'Property C', location: 'City Z' },
  ];

  return (
    <div>
      <h1>Strata Management - Property List</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name} - {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;