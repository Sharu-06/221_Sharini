import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for the return button

const PublishingTools = () => {
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
    toolsContainer: {
      background: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      padding: '30px',
      width: '100%',
      maxWidth: '800px',
      textAlign: 'left',
    },
    toolsTitle: {
      fontSize: '28px',
      marginBottom: '15px',
      fontWeight: '600',
      color: '#0073e6',
      borderBottom: '2px solid #0073e6',
      paddingBottom: '10px',
    },
    toolItem: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px',
      borderBottom: '1px solid #e0e0e0',
      paddingBottom: '10px',
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
      <h1 style={styles.title}>Publishing Tools</h1>
      <p 
        style={styles.description}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.descriptionHover.boxShadow}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'}
      >
        Use our tools to draft, schedule, or publish posts efficiently across channels. Whether you need to manage a single post or oversee a large campaign, we've got you covered.
      </p>

      <div style={styles.toolsContainer}>
        <h2 style={styles.toolsTitle}>Our Tools Include:</h2>
        <ul>
          <li style={styles.toolItem}>🔹 **Drafting Tool:** Create and edit posts with ease.</li>
          <li style={styles.toolItem}>🔹 **Scheduling Tool:** Schedule your posts to go live at optimal times.</li>
          <li style={styles.toolItem}>🔹 **Analytics Dashboard:** Monitor the performance of your posts.</li>
          <li style={styles.toolItem}>🔹 **Collaboration Tool:** Work with your team to manage content efficiently.</li>
          <li style={styles.toolItem}>🔹 **Campaign Manager:** Plan, execute, and track entire campaigns seamlessly.</li>
          <li style={styles.toolItem}>🔹 **Content Calendar:** Visualize your publishing schedule with a calendar view.</li>
          <li style={styles.toolItem}>🔹 **Auto-Publish:** Set up recurring posts automatically for better engagement.</li>
          <li style={styles.toolItem}>🔹 **Multi-Channel Publishing:** Publish posts across multiple platforms with one click.</li>
          <li style={styles.toolItem}>🔹 **Bulk Uploads:** Save time by uploading multiple posts at once.</li>
        </ul>
      </div>

      <div style={styles.footer}>
        © 2024 Media Spot. Empowering your social media presence.
      </div>
    </div>
  );
};

export default PublishingTools;
