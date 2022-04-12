import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import {
  DashContainer,
  DashNav,
  DashHeader,
  DashMain,
} from "./DashboardElements";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <DashContainer>
        <DashNav>
          <Navbar />
        </DashNav>
        <DashHeader>Dashboard</DashHeader>
        <DashMain></DashMain>
      </DashContainer>
    </div>
  );
};

export default Dashboard;
