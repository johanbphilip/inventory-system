import React from "react";
import NavigationBar from "./NavigationBar";
import SearchTable from "./SearchTable";

const Dashboard = () => {
  return (
    <div className="flex flex-row relative">
      <NavigationBar />
      <SearchTable />
    </div>
  );
};

export default Dashboard;
