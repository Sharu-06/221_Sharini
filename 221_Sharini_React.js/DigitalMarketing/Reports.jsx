import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Reports = () => {
  const navigate = useNavigate();

  const styles = {
    container: { padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' },
    header: { display: 'flex', alignItems: 'center', marginBottom: '20px' },
    backIcon: { cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '20px' },
    title: { fontSize: '24px', fontWeight: 'bold' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' },
    card: { backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
    pieChart: { width: '200px', margin: '0 auto' },
    metricRow: { display: 'flex', justifyContent: 'space-between', margin: '10px 0' },
    buttonGroup: { display: 'flex', gap: '10px', marginTop: '20px' },
    button: { flex: 1, padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' },
  };

  const barData = {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'],
    datasets: [
      {
        label: 'Impressions',
        data: [1200, 950, 1050, 870, 700],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Engagements',
        data: [800, 600, 750, 650, 550],
        backgroundColor: '#2196F3',
      },
    ],
  };

  const pieData = {
    labels: ['Male Followers', 'Female Followers'],
    datasets: [
      {
        data: [62, 38],
        backgroundColor: ['#4CAF50', '#FF4081'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.backIcon} onClick={() => navigate('/dashboard')}>
          <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Dashboard
        </div>
        <h1 style={styles.title}>Reports</h1>
      </div>

      <div style={styles.grid}>
        {/* Group Trends Card */}
        <div style={styles.card}>
          <h2>Group Trends</h2>
          <div style={styles.metricRow}>
            <span>Incoming Messages</span> <strong>1.2k</strong>
          </div>
          <div style={styles.metricRow}>
            <span>Sent Messages</span> <strong>304</strong>
          </div>
          <div style={styles.metricRow}>
            <span>New Twitter Followers</span> <strong>257</strong>
          </div>
          <div style={styles.metricRow}>
            <span>New Facebook Fans</span> <strong>659</strong>
          </div>
        </div>

        {/* Audience Demographics */}
        <div style={styles.card}>
          <h2>Audience Demographics</h2>
          <div style={styles.pieChart}>
            <Pie data={pieData} />
          </div>
        </div>

        {/* Bar Chart Section */}
        <div style={styles.card}>
          <h2>Performance Overview</h2>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>

        {/* To-Do Section */}
        <div style={styles.card}>
          <h2>To-Do</h2>
          <div style={styles.buttonGroup}>
            <button style={{ ...styles.button, backgroundColor: '#4CAF50' }}>Go to Inbox</button>
            <button style={{ ...styles.button, backgroundColor: '#FF9800' }}>View My Tasks</button>
            <button style={{ ...styles.button, backgroundColor: '#03A9F4' }}>View Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
