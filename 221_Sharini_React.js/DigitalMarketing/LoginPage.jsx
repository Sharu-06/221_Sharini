import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registeredUsers = JSON.parse(localStorage.getItem('users')) || []; // Fetch registered users from local storage

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in the details');
      return;
    }

    const user = registeredUsers.find((u) => u.email === email);
    if (!user) {
      setError('This email does not exist.');
    } else if (user.password !== password) {
      setError('Invalid password.');
    } else {
      setError('');
      alert('Login successful!'); // Optional: alert on successful login

      // Extract user details for local storage
      const initials = user.username.charAt(0).toUpperCase(); // Assuming username is stored in the user object
      const userData = { name: user.username, initials };

      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      navigate('/dashboard'); // Redirect to the dashboard page after login
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#0e3944',
    },
    leftSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      color: '#fff',
      textAlign: 'center',
    },
    stylishTitle: {
      fontSize: '80px',
      fontFamily: 'Maiandra GD',
      letterSpacing: '2px',
      wordSpacing: '4px',
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      marginBottom: '20px',
    },
    leftParagraph: {
      fontSize: '30px',
      fontFamily: 'Calibri, sans-serif',
      maxWidth: '600px',
      lineHeight: '1.5',
      marginBottom: '30px',
    },
    mediaSpot: {
      fontSize: '48px',
      fontFamily: 'Brush Script MT, cursive',
      marginBottom: '20px',
      color: '#4CAF50',
    },
    rightSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '40px',
    },
    form: {
      width: '100%',
      maxWidth: '400px',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    passwordContainer: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    },
    showPasswordIcon: {
      position: 'absolute',
      right: '10px',
      cursor: 'pointer',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      marginTop: '10px',
    },
    footerLinkButton: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#4CAF50',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.stylishTitle}>
          Extend your social reach with employee advocacy
        </h1>
        <p style={styles.leftParagraph}>
          The best brand advocates are you and your coworkers, especially as buyers engage more with employee content.
          Tap into employee advocacy to drive better business results.
        </p>
      </div>

      <div style={styles.rightSection}>
        <form style={styles.form} onSubmit={handleLogin}>
          <h1 style={styles.mediaSpot}>Media Spot</h1>
          <h2>Welcome back, good to see you again!</h2>
          {error && <p style={styles.error}>{error}</p>}

          <input
            type="email"
            placeholder="Email Address"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={styles.showPasswordIcon} onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button type="submit" style={styles.button}>
            Log In
          </button>

          <div style={styles.footerLinks}>
            <button style={styles.footerLinkButton}>Forgot your password?</button>
            <div>
              Don't have an account?{' '}
              <button style={styles.footerLinkButton} onClick={() => navigate('/signup')}>
                Sign up now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
