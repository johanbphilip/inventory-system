import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchTile from '../pages/SearchTile';

const Dashboard = () => {
  return (
    <div className="relative flex flex-row">
      <NavigationBar />
      <SearchTile />
    </div>
  );
};

export default Dashboard;
