import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PostScheduler from './PostScheduler';

const Publishing = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const handlePostSubmit = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/publishing');
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div style={styles.container}>
      <Header navigate={navigate} />
      <PostList posts={posts} onDeletePost={handleDeletePost} />
      <PostScheduler onPostSubmit={handlePostSubmit} />
    </div>
  );
};

const Header = ({ navigate }) => (
  <div style={styles.header}>
    <div style={styles.backButton} onClick={() => navigate('/dashboard')}>
      <FaArrowLeft style={styles.icon} /> Back to Dashboard
    </div>
    <h2 style={styles.title}>Publishing Calendar</h2>
  </div>
);

const PostList = ({ posts, onDeletePost }) => (
  <div style={styles.postList}>
    {posts.length === 0 ? (
      <p style={styles.emptyMessage}>No posts scheduled yet.</p>
    ) : (
      posts.map((post, index) => (
        <PostItem key={index} post={post} onDelete={() => onDeletePost(index)} />
      ))
    )}
  </div>
);

const PostItem = ({ post, onDelete }) => (
  <div style={styles.postContainer}>
    <h4 style={styles.postTitle}>{post.title}</h4>
    <p style={styles.postContent}>{post.content}</p>
    <p style={styles.scheduledTime}>Scheduled for: {post.scheduledTime}</p>
    {post.file instanceof File && (
      <img
        src={URL.createObjectURL(post.file)}
        alt="Post"
        style={styles.image}
      />
    )}
    <button style={styles.deleteButton} onClick={onDelete}>
      Delete Post
    </button>
  </div>
);

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    overflowY: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '20px',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#007BFF',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#333',
  },
  postList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  emptyMessage: {
    fontSize: '18px',
    color: '#888',
    textAlign: 'center',
  },
  postContainer: {
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
  },
  postTitle: {
    margin: '0 0 10px',
    fontSize: '22px',
    color: '#333',
  },
  postContent: {
    margin: '0 0 10px',
    fontSize: '16px',
    color: '#555',
  },
  scheduledTime: {
    fontSize: '14px',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    marginTop: '10px',
    borderRadius: '5px',
  },
  icon: {
    marginRight: '10px',
  },
};

export default Publishing;
