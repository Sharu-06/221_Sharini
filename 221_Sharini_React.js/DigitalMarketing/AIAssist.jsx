import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa'; // Using an icon for the back button

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...newMessages.map((msg) => ({
              role: msg.sender === 'bot' ? 'assistant' : 'user',
              content: msg.text,
            })),
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`, // Replace with your OpenAI API key
          },
        }
      );

      const botResponse = response.data.choices[0].message.content.trim();
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: 'Oops! Something went wrong. Please check your API key or network connection.', sender: 'bot' },
      ]);
      console.error('Error with OpenAI API request:', error);
    } finally {
      setIsLoading(false);
    }

    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div style={styles.header}>
          <button onClick={() => window.history.back()} style={styles.backButton}>
            <FaArrowLeft />
          </button>
          <h2 style={styles.headerTitle}>Chatbot</h2>
        </div>
        <div style={styles.chatWindow} ref={chatWindowRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
                backgroundColor: message.sender === 'bot' ? '#e0e0e0' : '#007bff',
                color: message.sender === 'bot' ? '#000' : '#fff',
              }}
            >
              {message.text}
            </div>
          ))}
          {isLoading && (
            <div style={styles.loading}>
              <span>Typing...</span>
            </div>
          )}
        </div>
        <div style={styles.inputArea}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button onClick={handleSendMessage} style={styles.sendButton} disabled={isLoading}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f5f5f5',
    fontFamily: "'Poppins', sans-serif",
  },
  chatContainer: {
    width: '100%',
    maxWidth: '600px', // Maximum width for better layout
    height: '90%', // Allow some space from the top
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px',
    borderBottom: '2px solid #0056b3',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  chatWindow: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f9f9f9',
  },
  message: {
    maxWidth: '75%',
    padding: '12px 15px',
    borderRadius: '20px',
    wordWrap: 'break-word',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  inputArea: {
    display: 'flex',
    borderTop: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  loading: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    color: '#007bff',
  },
};

export default Chatbot;
