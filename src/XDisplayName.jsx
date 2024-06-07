import React, { useState } from 'react';

function FullNameDisplay() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const combinedName = `${firstName.trim()} ${lastName.trim()}`; 
    setFullName(combinedName);
  };

  const isFormValid = () => {
    return combinedName !== ''; 
  };

  const combinedName = `${firstName.trim()} ${lastName.trim()}`; 

  return (
    <div className="full-name-display">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
        <button type="submit" disabled={!isFormValid()}>Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default FullNameDisplay;
