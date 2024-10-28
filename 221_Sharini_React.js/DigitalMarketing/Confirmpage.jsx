import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const SignupStep = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();  // Initialize navigation

  const pageStyles = {
    container: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)', // Gradient background
      fontFamily: "'Roboto', sans-serif", // Modern font
    },
    contentWrapper: {
      width: '600px',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Deeper shadow for depth
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    title: {
      textAlign: 'center',
      marginBottom: '10px',
      fontSize: '28px',
      fontWeight: '700',
      color: '#333',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#777',
      fontSize: '16px',
    },
    roleButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    roleButton: (isSelected) => ({
      flex: 1,
      margin: '0 5px',
      padding: '14px',
      borderRadius: '5px',
      border: '2px solid #4CAF50',
      backgroundColor: isSelected ? '#4CAF50' : '#fff',
      color: isSelected ? '#fff' : '#4CAF50',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: isSelected ? '0 4px 12px rgba(76, 175, 80, 0.4)' : 'none', // Shadow effect for selected button
    }),
    checkboxWrapper: {
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      padding: '14px 20px',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '600',
      marginTop: '20px',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    },
  };

  const roles = ['Doing the work', 'Overseeing a team', 'Doing both'];
  const options = [
    'Quickly analyze and monitor social media efforts',
    'Understand brand sentiment and improve my strategy',
    'Make my team faster and more accountable',
    'Drive brand awareness through employee advocacy',
    'Respond to comments and provide customer care',
    'Schedule social posts in advance',
  ];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleFinish = () => {
    navigate('/dashboard');  // Navigate to the Dashboard page
  };

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.contentWrapper}>
        <h2 style={pageStyles.title}>What are you here to do?</h2>
        <p style={pageStyles.subtitle}>In Media spot I'll be:</p>
        <div style={pageStyles.roleButtons}>
          {roles.map((role) => (
            <button
              key={role}
              style={pageStyles.roleButton(selectedRole === role)}
              onClick={() => setSelectedRole(role)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Hover effect
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {role}
            </button>
          ))}
        </div>

        <p style={pageStyles.subtitle}>I'll use Media spot to:</p>
        {options.map((option) => (
          <div key={option} style={pageStyles.checkboxWrapper}>
            <label style={{ fontSize: '14px', color: '#555' }}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {' ' + option}
            </label>
          </div>
        ))}

        <button 
          style={pageStyles.button} 
          onClick={handleFinish}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default SignupStep;
