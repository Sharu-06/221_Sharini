import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for navigation

const ContentLabels = () => {
  const navigate = useNavigate();
  const [selectedLabel, setSelectedLabel] = useState(null); // State to keep track of selected label

  const styles = {
    container: {
      padding: '40px 60px',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
    },
    returnIcon: {
      fontSize: '20px',
      cursor: 'pointer',
      color: '#0073e6',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '40px',
      alignSelf: 'flex-start',
      transition: 'color 0.3s', // Smooth color transition on hover
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#0056b3',
      textAlign: 'center',
      letterSpacing: '1.5px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      borderBottom: '3px solid #0056b3',
      paddingBottom: '10px',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.6',
      textAlign: 'center',
      maxWidth: '800px',
      color: '#555',
      marginBottom: '30px',
    },
    labelBox: {
      width: '100%',
      maxWidth: '900px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      padding: '30px',
      textAlign: 'left',
      lineHeight: '1.8',
      fontSize: '18px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0056b3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '20px',
      letterSpacing: '1px',
    },
    buttonHover: {
      backgroundColor: '#004a99',
    },
    labelContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '20px',
    },
    label: {
      padding: '8px 16px',
      backgroundColor: '#0073e6',
      color: '#fff',
      borderRadius: '12px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    labelSelected: {
      backgroundColor: '#004a99',
    },
    labelDetails: {
      marginTop: '20px',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      color: '#333',
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '16px',
      color: '#777',
    },
  };

  // Sample labels
  const labels = [
    { name: 'Marketing', description: 'Posts related to promoting products or services.' },
    { name: 'Product Launch', description: 'Updates about new product releases or features.' },
    { name: 'SEO', description: 'Content focused on improving search engine optimization.' },
    { name: 'Campaigns', description: 'Ongoing or upcoming marketing campaigns.' },
    { name: 'Customer Engagement', description: 'Posts engaging directly with your customer base.' },
    { name: 'Content Strategy', description: 'Guidance on structuring future posts and planning.' }
  ];

  // Function to handle label click
  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <div style={styles.container}>
      {/* Return to Dashboard Icon */}
      <div style={styles.returnIcon} onClick={() => navigate('/dashboard')}>
        <FaArrowLeft /> Back to Dashboard
      </div>

      <h1 style={styles.title}>Content Labels</h1>
      <p style={styles.description}>
        Organize and manage your content with ease. Use content labels to track your posts and ensure you're always on top of your social media strategy. Stay organized and efficient with our labeling system.
      </p>

      <div style={styles.labelBox}>
        <h2 style={{ fontSize: '22px', color: '#0073e6', marginBottom: '15px' }}>How to Label Content</h2>
        <p>
          1. Create clear and concise labels based on the categories relevant to your business.<br />
          2. Assign labels to each post to ensure consistent tracking.<br />
          3. Filter posts by labels to analyze their performance and refine your strategy.
        </p>

        <button 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Create New Label
        </button>

        {/* Sample Labels Section */}
        <div style={styles.labelContainer}>
          {labels.map((label, index) => (
            <div
              key={index}
              style={selectedLabel === label ? { ...styles.label, ...styles.labelSelected } : styles.label}
              onClick={() => handleLabelClick(label)}
            >
              {label.name}
            </div>
          ))}
        </div>

        {/* Label Details */}
        {selectedLabel && (
          <div style={styles.labelDetails}>
            <h3>{selectedLabel.name}</h3>
            <p>{selectedLabel.description}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2024 Media Spot
      </div>
    </div>
  );
};

export default ContentLabels;
