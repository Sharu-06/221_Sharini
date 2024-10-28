import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for the return button

const BrandSentiment = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: '40px',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
      overflowY: 'auto',
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
      marginBottom: '20px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#0073e6',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
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
    sectionContainer: {
      background: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      padding: '30px',
      width: '100%',
      maxWidth: '800px',
      textAlign: 'left',
      transition: 'transform 0.3s, box-shadow 0.3s',
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '28px',
      marginBottom: '15px',
      fontWeight: '600',
      color: '#0073e6',
    },
    sectionText: {
      fontSize: '18px',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '10px',
    },
    actionItem: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px',
      listStyleType: 'circle',
      paddingLeft: '20px',
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
          e.currentTarget.style.color = '#0056b3';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#0073e6';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaArrowLeft /> Back to Dashboard
      </div>
      <h1 style={styles.title}>Brand Sentiment</h1>
      <p 
        style={styles.description}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.descriptionHover.boxShadow}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'}
      >
        Uncover insights into how people feel about your brand across platforms.
      </p>

      <div 
        style={styles.sectionContainer}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        }}
      >
        <h2 style={styles.sectionTitle}>Key Insights</h2>
        <p style={styles.sectionText}>
          Analyze sentiment across social media platforms to understand public perception of your brand. Leverage data to shape your marketing strategy effectively and enhance customer relationships.
        </p>
      </div>

      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Common Sentiment Metrics</h2>
        <ul>
          <li style={styles.actionItem}>Positive Sentiment Rate: Measures the percentage of positive mentions.</li>
          <li style={styles.actionItem}>Negative Sentiment Rate: Measures the percentage of negative mentions.</li>
          <li style={styles.actionItem}>Neutral Sentiment Rate: Measures the percentage of neutral mentions.</li>
          <li style={styles.actionItem}>Overall Sentiment Score: A composite score based on positive, negative, and neutral mentions.</li>
        </ul>
      </div>

      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Actionable Steps to Improve Brand Sentiment</h2>
        <ul>
          <li style={styles.actionItem}>Engage with your audience through personalized responses.</li>
          <li style={styles.actionItem}>Address negative feedback promptly and transparently.</li>
          <li style={styles.actionItem}>Share positive testimonials and success stories.</li>
          <li style={styles.actionItem}>Continuously monitor sentiment and adjust strategies accordingly.</li>
        </ul>
      </div>

      <div style={styles.footer}>
        © 2024 Media Spot
      </div>
    </div>
  );
};

export default BrandSentiment;
