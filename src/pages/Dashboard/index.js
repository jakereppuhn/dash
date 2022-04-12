import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
