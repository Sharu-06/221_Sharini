import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all the details');
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      setError('Use a proper username');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email format');
    } else if (registeredUsers.some((user) => user.email === email)) {
      setError('Email already exists');
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setError('Password must contain at least 6 characters');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!termsAccepted) {
      setError('Please accept the terms and conditions');
    } else {
      setError('');
      const newUser = { username, email, password };
      localStorage.setItem('users', JSON.stringify([...registeredUsers, newUser]));
      
      // Save user data for later use
      const initials = username.charAt(0).toUpperCase(); // Get first initial
      const userData = { name: username, initials };
      localStorage.setItem('user', JSON.stringify(userData));
      
      alert('Signup successful!');
      navigate('/connect-profile'); // Navigate to the ConnectProfile page after signup
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #6E72FC, #AD1DEB)',
      padding: '40px'
    }}>
      <form onSubmit={handleSignup} style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#fff',
        padding: '35px 45px',
        borderRadius: '15px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1)',
        transition: 'transform 0.3s',
      }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

        <h1 style={{
          fontSize: '26px',
          fontWeight: 'bold',
          marginBottom: '25px',
          color: '#4b4b4b',
          textAlign: 'center'
        }}>
          Join Our Community
        </h1>

        {error && <p style={{
          color: '#ff4b5c',
          marginBottom: '20px',
          fontSize: '15px',
          textAlign: 'center'
        }}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 15px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#f5f7fa',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 15px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: '#f5f7fa',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          }}
        />

        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              fontSize: '15px',
              backgroundColor: '#f5f7fa',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#888',
              fontSize: '20px'
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              fontSize: '15px',
              backgroundColor: '#f5f7fa',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <label style={{
          fontSize: '14px',
          marginBottom: '25px',
          display: 'block',
          color: '#555'
        }}>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          I agree to the <span style={{ color: '#6E72FC' }}>terms and conditions</span>
        </label>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 18px',
            backgroundColor: '#6E72FC',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'background-color 0.3s ease',
            letterSpacing: '1px',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5a60ea'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6E72FC'}
        >
          Create account
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontSize: '14px' }}>
          Email already exists?{' '}
          <Link to="/login" style={{ color: '#6E72FC', textDecoration: 'none', fontWeight: 'bold' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
