import React from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const linkStyle = {
    display: 'block',
    color: 'white',
    margin: '10px 0',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={sidebarStyle}>
      <h2>Dashboard</h2>
      <a href="#" style={linkStyle}>Home</a>
      <a href="#" style={linkStyle}>Reports</a>
      <a href="#" style={linkStyle}>Settings</a>
    </div>
  );
};

export default Sidebar;
