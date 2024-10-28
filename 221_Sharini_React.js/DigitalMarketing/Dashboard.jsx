import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [user, setUser] = useState({ name: '', initials: '' });

  useEffect(() => {
    const fetchUserData = () => {
      const loggedInUser = JSON.parse(localStorage.getItem('user'));
      if (loggedInUser) {
        setUser({ name: loggedInUser.name, initials: loggedInUser.initials });
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const dashboardStyles = {
    container: {
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(to right, #f7f8fc, #e2e6ea)',
      fontFamily: "'Poppins', sans-serif",
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#2c2c2c',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      boxShadow: '4px 0 15px rgba(0, 0, 0, 0.2)',
    },
    sidebarItem: {
      padding: '12px 15px',
      cursor: 'pointer',
      fontSize: '18px',
      borderRadius: '5px',
      transition: 'background-color 0.3s, transform 0.2s',
      '&:hover': {
        backgroundColor: '#4a4a4a',
        transform: 'scale(1.05)',
      },
    },
    header: {
      padding: '15px 20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    contentWrapper: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
    },
    sectionTitle: {
      fontSize: '26px',
      marginBottom: '15px',
      fontWeight: '700',
      color: '#1f1f1f',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      padding: '0 10px',
    },
    card: {
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      // Adjust the hover effect
      '&:hover': {
        transform: 'scale(1.05)', // Zoom in effect
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
      },
    },
    
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      '&:hover': {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
      },
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    profileIcon: {
      width: '45px',
      height: '45px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#fff',
      fontSize: '18px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    postSection: {
      backgroundColor: '#ffffff',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    activityHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    activityTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1f1f1f',
    },
    publishButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      '&:hover': {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
      },
    },
    recentPosts: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    postCard: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    postPerformance: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    postStats: {
      display: 'flex',
      gap: '10px',
    },
    statItem: {
      backgroundColor: '#e2e6ea',
      padding: '8px 12px',
      borderRadius: '5px',
      fontSize: '14px',
      color: '#495057',
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: '#d1d3e0',
      },
    },
  };

  return (
    <div style={dashboardStyles.container}>
      <div style={dashboardStyles.sidebar}>
        <h3>{user.organization || 'Your Organization'}</h3>
        <div style={dashboardStyles.sidebarItem} onClick={() => navigate('/dashboard')}>
          Dashboard
        </div>
        <div style={dashboardStyles.sidebarItem} onClick={() => navigate('/publishing')}>
          Publishing
        </div>
        <div style={dashboardStyles.sidebarItem} onClick={() => navigate('/reports')}>
          Reports
        </div>
        <div style={dashboardStyles.sidebarItem} onClick={() => navigate('/reviews')}>
          Reviews
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={dashboardStyles.header}>
          <div style={dashboardStyles.profileSection}>
            <div style={dashboardStyles.profileIcon}>{user.initials}</div>
            <h2 style={{ color: '#1f1f1f' }}>Welcome, {user.name}!</h2>
          </div>
          <button style={dashboardStyles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div style={dashboardStyles.contentWrapper}>
          <h3 style={dashboardStyles.sectionTitle}>Explore Media Spot</h3>
          <div style={dashboardStyles.cardGrid}>
            {[
              { title: 'Content Labels', onClick: () => navigate('/content-labels') },
              { title: 'Optimal Send Times', onClick: () => navigate('/optimal-send-times') },
              { title: 'Brand Sentiment', onClick: () => navigate('/brand-sentiment') },
              { title: 'Publishing Tools', onClick: () => navigate('/publishing-tools') },
              { title: 'Message Prioritization', onClick: () => navigate('/message-prioritization') },
              { title: 'AI Assist', onClick: () => navigate('/ai-assist') },
            ].map((item, index) => (
              <div
                key={item.title}
                style={{
                  ...dashboardStyles.card,
                  ...(hoveredCard === index ? { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' } : {}),
                }}
                onClick={item.onClick}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h4 style={{ color: '#1f1f1f', fontWeight: '600' }}>{item.title}</h4>
                <p style={{ color: '#6c757d' }}>Learn more about {item.title.toLowerCase()}.</p>
              </div>
            ))}
          </div>

          {/* Post section */}
          <div style={dashboardStyles.postSection}>
            <div style={dashboardStyles.activityHeader}>
              <h3 style={dashboardStyles.activityTitle}>Today's Publishing</h3>
              <button
                style={dashboardStyles.publishButton}
                onClick={() => navigate('/publishing')}
              >
                Compose Post
              </button>
            </div>
            <div style={dashboardStyles.recentPosts}>
              <div style={dashboardStyles.postCard}>
                <div style={dashboardStyles.postPerformance}>
                  <h4>Your Recent Posts</h4>
                  <div style={dashboardStyles.postStats}>
                    <div style={dashboardStyles.statItem}>5 Likes</div>
                    <div style={dashboardStyles.statItem}>3 Comments</div>
                  </div>
                </div>
                <p>Published on: 10/19/24</p>
              </div>
              <div style={dashboardStyles.postCard}>
                <div style={dashboardStyles.postPerformance}>
                  <h4>Your Recent Posts</h4>
                  <div style={dashboardStyles.postStats}>
                    <div style={dashboardStyles.statItem}>10 Likes</div>
                    <div style={dashboardStyles.statItem}>2 Comments</div>
                  </div>
                </div>
                <p>Published on: 10/13/24</p>
              </div>
            </div>
          </div>

          <h3 style={dashboardStyles.sectionTitle}>Your Latest Activity</h3>
          <p style={{ color: '#6c757d' }}>Today's Publishing: 2 posts scheduled.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
