import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar  from '../components/Navbar';
import Card from '../components/Card';
import Chart from '../components/Chart';
import WidgetContainer from '../components/WidgetContainer';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Card title="Revenue" value="$10,000" />
            <Card title="Users" value="1,200" />
            <Card title="Sales" value="300" />
          </div>
          <Chart />
          <WidgetContainer/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
