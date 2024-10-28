import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AuthorizePage = () => {
  const { platform } = useParams();
  const navigate = useNavigate();

  const handleAuthorize = () => {
    navigate('/Detailspage');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Authorize {platform} to access your account?</h2>
        <p style={styles.description}>This application will be able to:</p>
        <ul style={styles.list}>
          <li>🔍 See Posts from your timeline (including protected Posts) as well as your Lists and collections.</li>
          <li>👤 See your {platform} profile information and account settings.</li>
          <li>👥 See accounts you follow, mute, and block.</li>
          <li>🔄 Follow and unfollow accounts for you.</li>
          <li>✏️ Update your profile and account settings.</li>
          <li>📮 Create and delete Posts for you, and engage with Posts created by others (Like, un-Like, or reply to a Post, Repost, etc.) for you.</li>
          <li>📂 Create, manage, and delete Lists and collections for you.</li>
          <li>🚫 Mute, block, and report accounts for you.</li>
          <li>✉️ Send Direct Messages for you and read, manage, and delete your Direct Messages.</li>
          <li>📈 See, create, and manage your advertising data including:</li>
          <ul style={styles.subList}>
            <li>🎯 Campaigns</li>
            <li>👥 Audiences</li>
            <li>🏢 Business and ad account information</li>
            <li>📊 Ad account and user settings</li>
            <li>🖼️ Creatives and media</li>
          </ul>
        </ul>
        <div style={styles.buttonContainer}>
          <button style={buttonStyle('#4CAF50')} onClick={handleAuthorize}>
            Authorize {platform}
          </button>
          <button
            style={buttonStyle('#f44336')}
            onClick={() => {
              console.log("Cancel button clicked");
              navigate('/connect-profile');
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(120deg, #84fab0, #8fd3f4)',
  },
  card: {
    width: '600px',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly more opaque for better contrast
    borderRadius: '15px',
    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
  },
  description: {
    textAlign: 'center',
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px',
    lineHeight: '1.5', // Improved line height for readability
  },
  list: {
    paddingLeft: '20px',
    color: '#444',
    marginBottom: '20px',
    listStyleType: 'none', // Remove default list styling
  },
  subList: {
    paddingLeft: '20px',
    color: '#666',
    listStyleType: 'none', // Remove default sublist styling
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
};

const buttonStyle = (backgroundColor) => ({
  padding: '12px 24px',
  color: '#fff',
  backgroundColor,
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'background-color 0.3s, transform 0.3s',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  outline: 'none',
  ':hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
});

export default AuthorizePage;
