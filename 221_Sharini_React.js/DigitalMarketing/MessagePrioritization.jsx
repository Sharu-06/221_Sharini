import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for the return button

const MessagePrioritization = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: '40px',
      height: '100vh',
      backgroundColor: '#e9eff1',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
    },
    returnIcon: {
      fontSize: '20px',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#0073e6',
      transition: 'color 0.3s, transform 0.3s',
    },
    returnIconHover: {
      color: '#0056b3',
      transform: 'scale(1.1)',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#0073e6',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    description: {
      fontSize: '20px',
      color: '#333',
      textAlign: 'center',
      maxWidth: '800px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s',
    },
    descriptionHover: {
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
    },
    tipsContainer: {
      background: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      padding: '30px',
      width: '100%',
      maxWidth: '800px',
      textAlign: 'left',
    },
    tipsTitle: {
      fontSize: '28px',
      marginBottom: '15px',
      fontWeight: '600',
      color: '#0073e6',
    },
    tipItem: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px',
    },
    footer: {
      marginTop: 'auto',
      textAlign: 'center',
      fontSize: '16px',
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
      <h1 style={styles.title}>Message Prioritization</h1>
      <p 
        style={styles.description}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.descriptionHover.boxShadow}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'}
      >
        Focus on the most important messages to handle quickly and efficiently.
      </p>

      <div style={styles.tipsContainer}>
        <h2 style={styles.tipsTitle}>Prioritization Tips:</h2>
        <ul>
          <li style={styles.tipItem}>🔹 **Urgency Assessment:** Determine which messages require immediate attention.</li>
          <li style={styles.tipItem}>🔹 **Importance Ranking:** Use a scale to categorize messages based on their significance.</li>
          <li style={styles.tipItem}>🔹 **Follow-Up Flags:** Mark messages that need follow-up for later review.</li>
          <li style={styles.tipItem}>🔹 **Batch Processing:** Group similar messages together to streamline responses.</li>
        </ul>
      </div>

      <div style={styles.footer}>
        © 2024 Media Spot
      </div>
    </div>
  );
};

export default MessagePrioritization;
