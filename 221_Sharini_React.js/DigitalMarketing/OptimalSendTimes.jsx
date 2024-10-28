import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon for the return button

const OptimalSendTimes = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: '40px',
      height: '100vh',
      backgroundColor: '#e7f0f9',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
    },
    returnIcon: {
      fontSize: '22px',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#0056b3',
      transition: 'color 0.3s, transform 0.3s',
    },
    returnIconHover: {
      color: '#003c80',
      transform: 'scale(1.1)',
    },
    pageTitle: {
      fontSize: '42px',
      marginBottom: '10px',
      fontWeight: '700',
      color: '#0073e6',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      background: 'linear-gradient(90deg, #0073e6, #00aaff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeIn 1s ease-in',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    pageDescription: {
      fontSize: '20px',
      color: '#333', // Changed color to a darker shade for better contrast
      textAlign: 'center',
      maxWidth: '800px',
      padding: '15px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Enhanced shadow for depth
      opacity: 1, // Fully opaque for visibility
    },
    card: {
      background: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      padding: '30px', // Increased padding for more space
      width: '100%',
      maxWidth: '800px', // Set max width for the card
      color: '#333',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center align the content
      margin: '20px 0', // Added margin for spacing
    },
    cardTitle: {
      fontSize: '26px',
      marginBottom: '15px', // Increased margin for spacing
      fontWeight: '600',
      color: '#0073e6',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      textAlign: 'center', // Center align title
    },
    conciseText: {
      fontSize: '18px', // Increased font size for better visibility
      color: '#555',
      lineHeight: '1.6', // Improved line height for readability
      textAlign: 'center', // Center align text
      padding: '0 10px', // Added padding for better spacing
    },
    graphContainer: {
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      padding: '15px',
      width: '100%',
      maxWidth: '800px',
    },
    graphPlaceholder: {
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#777',
      border: '2px dashed #0073e6',
      borderRadius: '10px',
      fontSize: '18px',
      fontWeight: '500',
      opacity: 0.8, // Slight opacity for the placeholder
    },
    footer: {
      marginTop: 'auto',
      textAlign: 'center',
      fontSize: '18px',
      color: '#777',
      borderTop: '1px solid #e0e0e0',
      paddingTop: '10px',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.returnIcon} 
        onClick={() => navigate('/dashboard')}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = styles.returnIconHover.color;
          e.currentTarget.style.transform = styles.returnIconHover.transform;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = styles.returnIcon.color;
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaArrowLeft /> Back to Dashboard
      </div>
      <h1 style={styles.pageTitle}>Optimal Send Times</h1>
      <p style={styles.pageDescription}>
        Post at the right times to boost engagement based on audience activity.
      </p>
      
      {/* Card for "Why Timing Matters?" */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Why Timing Matters?</h2>
        <p style={styles.conciseText}>
          Correct timing can significantly enhance your engagement. We analyze patterns to recommend the best posting times.
        </p>
      </div>
      
      <div style={styles.graphContainer}>
        <h2 style={styles.cardTitle}>Engagement Trends</h2>
        <div 
          style={styles.graphPlaceholder}
        >
          <p>Your Engagement Graph Will Be Here</p>
        </div>
      </div>
      
      <div style={styles.footer}>
        © 2024 Media Spot
      </div>
    </div>
  );
};

export default OptimalSendTimes;
