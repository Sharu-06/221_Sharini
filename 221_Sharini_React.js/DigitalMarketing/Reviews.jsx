import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: '40px',
      height: '100vh',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    returnIcon: {
      fontSize: '24px',
      cursor: 'pointer',
      marginBottom: '20px',
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#007BFF',
      transition: 'color 0.3s, transform 0.3s',
    },
    returnIconHover: {
      transform: 'scale(1.05)',
    },
    title: {
      fontSize: '36px',
      marginBottom: '10px',
      fontWeight: '700',
      color: '#333',
      borderBottom: '3px solid #007BFF',
      paddingBottom: '10px',
    },
    description: {
      fontSize: '20px',
      color: '#555',
      lineHeight: '1.6',
    },
    reviewsList: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
    reviewItem: {
      borderBottom: '1px solid #e0e0e0',
      padding: '20px 0',
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: '#f1f1f1',
      },
    },
    reviewText: {
      fontSize: '18px',
      color: '#444',
    },
    reviewer: {
      fontWeight: 'bold',
      color: '#007BFF',
      fontSize: '16px',
    },
    starRating: {
      color: '#FFD700',
      fontSize: '16px',
    },
    reviewDate: {
      fontSize: '14px',
      color: '#888',
      marginTop: '5px',
    },
    reviewsCount: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#555',
      textAlign: 'right',
    },
  };

  // Sample reviews data resembling Google Play Store reviews
  const reviews = [
    { id: 1, reviewer: 'Nidharshana', text: '⭐️⭐️⭐️⭐️⭐️ Great app! Very user-friendly and intuitive.', date: '2024-10-20' },
    { id: 2, reviewer: 'Sornaa', text: '⭐️⭐️⭐️⭐️ I love the scheduling feature. It saves me so much time!', date: '2024-10-18' },
    { id: 3, reviewer: 'Oviya', text: '⭐️⭐️⭐️⭐️⭐️ Amazing support team. They helped me with my queries quickly.', date: '2024-10-15' },
    { id: 4, reviewer: 'Selciya', text: '⭐️⭐️⭐️ Nice app, but it could use some more features.', date: '2024-10-10' },
    { id: 5, reviewer: 'Sivaranjani', text: '⭐️⭐️⭐️⭐️⭐️ Outstanding! The best app for managing my tasks!', date: '2024-10-05' },
  ];

  return (
    <div style={styles.container}>
      {/* Return to Dashboard Icon */}
      <div 
        style={styles.returnIcon} 
        onClick={() => navigate('/dashboard')} 
        onMouseOver={e => e.currentTarget.style.transform = styles.returnIconHover.transform} 
        onMouseOut={e => e.currentTarget.style.transform = ''}
      >
        ⬅ Back to Dashboard
      </div>

      <h1 style={styles.title}>User Reviews</h1>
      <p style={styles.description}>
        This page allows you to view and manage user feedback effectively. Keep track of insights from your audience!
      </p>

      {/* Reviews List */}
      <div style={styles.reviewsList}>
        {reviews.map(review => (
          <div key={review.id} style={styles.reviewItem}>
            <p style={styles.reviewer}>{review.reviewer}</p>
            <p style={styles.reviewText}>{review.text}</p>
            <p style={styles.reviewDate}>{review.date}</p>
          </div>
        ))}
        <p style={styles.reviewsCount}>{reviews.length} Reviews</p>
      </div>
    </div>
  );
};

export default Reviews;
