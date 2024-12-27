import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchTile from '../components/SearchTile';

const Dashboard = () => {
  return (
    <div className="relative flex flex-row">
      <NavigationBar />
      <SearchTile />
    </div>
  );
};

export default Dashboard;
