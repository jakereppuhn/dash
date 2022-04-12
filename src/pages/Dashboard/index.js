import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import IncomeForm from "../../components/IncomeForm";
import IncomeList from "../../components/IncomeList";
import { IncomeContainer, IncomeNav, IncomeMain } from "./DashboardElements";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return <div></div>;
};

export default Dashboard;
