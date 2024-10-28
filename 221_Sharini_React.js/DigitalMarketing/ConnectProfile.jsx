import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectProfile = () => {
  const navigate = useNavigate();

  const handleProfileClick = (platform) => {
    navigate(`/authorize/${platform.toLowerCase()}`);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #3B82F6, #9333EA)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B5563' }}>
          Connect a Profile
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '30px', color: '#6B7280' }}>
          Attach a profile to see how we can help grow your business.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button onClick={() => handleProfileClick('Facebook')} style={buttonStyle('#1877F2', '#1363D0')}>Facebook Page</button>
          <button onClick={() => handleProfileClick('Instagram')} style={buttonStyle('#E4405F', '#C13552')}>Instagram Profile</button>
          <button onClick={() => handleProfileClick('LinkedIn')} style={buttonStyle('#0A66C2', '#0A58A2')}>LinkedIn Page</button>
          <button onClick={() => handleProfileClick('X')} style={buttonStyle('#000000', '#222222')}>X Profile</button>
        </div>
        <p style={{ fontSize: '14px', marginTop: '25px', color: '#9CA3AF' }}>
          You can connect more profiles and networks later.
        </p>
      </div>
    </div>
  );
};

const buttonStyle = (backgroundColor, hoverColor) => ({
  width: '100%',
  padding: '14px',
  color: '#fff',
  backgroundColor,
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

export default ConnectProfile;
