import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const [isPlatformOpen, setIsPlatformOpen] = useState(false); // State for Platform dropdown
  const [isSolutionOpen, setIsSolutionOpen] = useState(false); // State for Solutions dropdown

  const togglePlatformDropdown = () => setIsPlatformOpen(!isPlatformOpen); // Toggle Platform dropdown
  const toggleSolutionDropdown = () => setIsSolutionOpen(!isSolutionOpen); // Toggle Solutions dropdown

  const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#0b3d32',
      color: '#fff',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      backgroundColor: '#002b25',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      position: 'relative',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      marginRight: '15px',
      cursor: 'pointer',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '10px 0',
      zIndex: 1000,
      display: 'none',
    },
    platformDropdown: {
      display: isPlatformOpen ? 'block' : 'none',
    },
    solutionDropdown: {
      display: isSolutionOpen ? 'block' : 'none',
    },
    dropdownItem: {
      padding: '10px 20px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    dropdownItemHover: {
      backgroundColor: '#f0f0f0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    demoButton: {
      backgroundColor: '#fff',
      color: '#000',
      marginLeft: '10px',
    },
    trialButton: {
      backgroundColor: '#000',
      color: '#fff',
      marginLeft: '10px',
    },
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px',
    },
    heroText: {
      maxWidth: '600px',
    },
    heading: {
      fontSize: '48px',
      lineHeight: 1.2,
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '18px',
      marginBottom: '30px',
    },
    ctaButtons: {
      display: 'flex',
      gap: '15px',
    },
    ctaButton: {
      padding: '15px 30px',
      fontSize: '18px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    secondaryButton: {
      backgroundColor: '#fff',
      color: '#000',
    },
    heroImage: {
      maxWidth: '650px',
      borderRadius: '10px',
    },
    stats: {
      textAlign: 'center',
      marginTop: '50px',
    },
    statItems: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '10px',
    },
    statItem: {
      fontSize: '16px',
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>Media Spot</div>
        <nav style={styles.navbar}>
          {/* Platform Dropdown */}
          <div style={{ position: 'relative' }}>
            <span style={styles.link} onClick={togglePlatformDropdown}>
              Platform
            </span>
            <div style={{ ...styles.dropdown, ...styles.platformDropdown }}>
              <div style={styles.dropdownItem}>Core Features</div>
              <div style={styles.dropdownItem}>- Engagement</div>
              <div style={styles.dropdownItem}>- Publishing</div>
              <div style={styles.dropdownItem}>- Analytics</div>
              <div style={styles.dropdownItem}>Premium Solutions</div>
              <div style={styles.dropdownItem}>- Premium Analytics</div>
              <div style={styles.dropdownItem}>- Listening</div>
              <div style={styles.dropdownItem}>- Influencer Marketing</div>
              <div style={styles.dropdownItem}>- Employee Advocacy</div>
              <div style={styles.dropdownItem}>Platform</div>
              <div style={styles.dropdownItem}>- AI and Automation</div>
              <div style={styles.dropdownItem}>- Integration</div>
              <div style={styles.dropdownItem}>- Data and Security</div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div style={{ position: 'relative' }}>
            <span style={styles.link} onClick={toggleSolutionDropdown}>
              Solutions
            </span>
            <div style={{ ...styles.dropdown, ...styles.solutionDropdown }}>
              <div style={styles.dropdownItem}>By Use Case</div>
              <div style={styles.dropdownItem}>- Manage Social Media</div>
              <div style={styles.dropdownItem}>- Publishing</div>
              <div style={styles.dropdownItem}>- Drive More Sales</div>
              <div style={styles.dropdownItem}>- Gather Deeper Insights</div>
              <div style={styles.dropdownItem}>- Amplify Brand Awareness</div>
              <div style={styles.dropdownItem}>- Personalize Customer Care</div>
              <div style={styles.dropdownItem}>By Service</div>
              <div style={styles.dropdownItem}>- Enterprise</div>
              <div style={styles.dropdownItem}>- Professional Services</div>
              <div style={styles.dropdownItem}>- Agencies</div>
            </div>
          </div>

          <a href="#pricing" style={styles.link}>
            Pricing
          </a>
          <a href="#resources" style={styles.link}>
            Resources
          </a>
          <button
            style={{
              ...styles.button,
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              marginRight: '20px',
            }}
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
          <button style={{ ...styles.button, ...styles.demoButton }}>
            Contact as
          </button>
         
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heading}>
            A powerful solution for social media management
          </h1>
          <p style={styles.paragraph}>
            Our all-in-one social media management platform unlocks the full
            potential of social to transform not just your marketing strategy—but every area of your organization.
          </p>
          <div style={styles.ctaButtons}>
            <button
              style={styles.ctaButton}
              onClick={() => window.location.href = 'mailto:support@example.com'}
            >
              Contact us
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://brandfolder.sproutsocial.com/VXTUTVL1/as/w5ptmb737n5nhn8nvrrqfhxj/product-collage_homepage_tech-brand-SaaS?auto=webp&format=webp"
            alt="Dashboard Preview"
            style={styles.heroImage}
          />
        </div>
      </section>

      <section style={styles.stats}>
        <h3>Media Spot gives you the tools to manage social media effectively.</h3>
        <div style={styles.statItems}>
          <div style={styles.statItem}>
            <strong>10,000+</strong> clients served worldwide
          </div>
          <div style={styles.statItem}>
            <strong>99.9%</strong> uptime with Media Spot
          </div>
          <div style={styles.statItem}>
            <strong>5 stars</strong> on leading SaaS review sites
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
