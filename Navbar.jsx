import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    height: '60px',
    backgroundColor: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    borderBottom: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const userStyle = {
    fontWeight: 'bold',
    color: '#2c3e50',
  };

  return (
    <div style={navbarStyle}>
      <div>Welcome to Dashboard</div>
      <div style={userStyle}>User</div>
    </div>
  );
};

export default Navbar;
