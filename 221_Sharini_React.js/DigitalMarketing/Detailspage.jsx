import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Detailspage = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // State to hold form values and validation errors
  const [formValues, setFormValues] = useState({
    organizationName: '',
    organizationWebsite: '',
    role: '',
    workType: '',
    orgSize: '',
    country: '',
    timeZone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = 'Required';  // Concise error message
      }
    });
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate('/Confirmpage');  // Navigate to Confirmpage
    } else {
      setErrors(validationErrors);
    }
  };

  const formStyles = {
    container: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #e1f5fe, #fff)',
    },
    formWrapper: {
      width: '500px',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '5px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      transition: 'border-color 0.3s',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      transition: 'border-color 0.3s',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '14px',
      color: '#ffffff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '-10px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={formStyles.container}>
      <div style={formStyles.formWrapper}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Where do you work?</h2>
        <form>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Name</label>
            <input 
              type="text" 
              name="organizationName" 
              style={formStyles.input} 
              value={formValues.organizationName}
              onChange={handleChange} 
            />
            {errors.organizationName && <div style={formStyles.error}>{errors.organizationName}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Website</label>
            <input 
              type="text" 
              name="organizationWebsite" 
              style={formStyles.input} 
              value={formValues.organizationWebsite}
              onChange={handleChange} 
            />
            {errors.organizationWebsite && <div style={formStyles.error}>{errors.organizationWebsite}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Which best describes you?</label>
            <select 
              name="role" 
              style={formStyles.select} 
              value={formValues.role}
              onChange={handleChange} 
            >
              <option value="">Select Option</option>
              <option>Individual Contributor</option>
              <option>Manager</option>
              <option>Director</option>
              <option>Vice President</option>
              <option>C-Level</option>
              <option>Other</option>
            </select>
            {errors.role && <div style={formStyles.error}>{errors.role}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>What kind of work do you do?</label>
            <select 
              name="workType" 
              style={formStyles.select} 
              value={formValues.workType}
              onChange={handleChange} 
            >
              <option value="">Select Option</option>
              <option>Social Media</option>
              <option>Marketing</option>
              <option>Information Technology (IT)</option>
              <option>Influencer Marketing</option>
              <option>Employer Brand</option>
              <option>Data/Analytics</option>
              <option>Customer Care/Support</option>
              <option>Corporate Communications</option>
              <option>Other</option>
            </select>
            {errors.workType && <div style={formStyles.error}>{errors.workType}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Size</label>
            <select 
              name="orgSize" 
              style={formStyles.select} 
              value={formValues.orgSize}
              onChange={handleChange} 
            >
              <option value="">Select Option</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-100 employees</option>
              <option>101-200 employees</option>
              <option>201-400 employees</option>
              <option>401-500 employees</option>
              <option>501-1000 employees</option>
              <option>1001-3000 employees</option>
              <option>3001-4000 employees</option>
              <option>4001-5000 employees</option>
              <option>5001-10000 employees</option>
              <option>10000+ employees</option>
            </select>
            {errors.orgSize && <div style={formStyles.error}>{errors.orgSize}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Country</label>
            <select 
              name="country" 
              style={formStyles.select} 
              value={formValues.country}
              onChange={handleChange} 
            >
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            {errors.country && <div style={formStyles.error}>{errors.country}</div>}
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Time Zone</label>
            <select 
              name="timeZone" 
              style={formStyles.select} 
              value={formValues.timeZone}
              onChange={handleChange} 
            >
              <option value="">Select Time Zone</option>
              <option>Chennai, Kolkata, Mumbai</option>
              <option>New York</option>
              <option>London</option>
            </select>
            {errors.timeZone && <div style={formStyles.error}>{errors.timeZone}</div>}
          </div>

          <button type="button" style={formStyles.button} onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detailspage;
