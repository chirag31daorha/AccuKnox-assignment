import React from 'react';

const Card = ({ title, value }) => {
  const cardStyle = {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    minWidth: '150px',
  };

  const titleStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '10px',
  };

  const valueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c3e50',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
};

export default Card;


