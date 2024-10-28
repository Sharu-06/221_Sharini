import React, { useState, useEffect } from 'react';

const PostScheduler = ({ onPostSubmit }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [minDateTime, setMinDateTime] = useState('');

  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    },
    header: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    submitButton: {
      padding: '12px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '10px',
    },
  };

  // Set the minimum date-time to the current moment
  useEffect(() => {
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
    setMinDateTime(formattedDateTime);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!postTitle || !postContent || !scheduledTime || !file) {
      setError('All fields are required.');
      return;
    }

    const selectedDate = new Date(scheduledTime);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setError('Scheduled time cannot be in the past.');
      return;
    }

    const post = {
      title: postTitle,
      content: postContent,
      scheduledTime,
      file,
    };

    // Call the onPostSubmit function to pass the post data back to Publishing
    if (onPostSubmit) {
      onPostSubmit(post);
    }

    // Reset form and error state
    setPostTitle('');
    setPostContent('');
    setScheduledTime('');
    setFile(null);
    setError('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Schedule a New Post</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Post Content"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          style={styles.input}
        />
        <input
          type="datetime-local"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          style={styles.input}
          min={minDateTime} // Prevent past dates and times
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostScheduler;
