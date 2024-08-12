import React from "react";
import NavigationBar from "./NavigationBar";
import SearchTile from "./SearchTile";

const Dashboard = () => {
  return (
    <div className="flex flex-row relative">
      <NavigationBar />
      <SearchTile />
    </div>
  );
};

export default Dashboard;
