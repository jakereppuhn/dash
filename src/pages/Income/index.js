import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import IncomeForm from "../../components/IncomeForm";
import IncomeList from "../../components/IncomeList";
import { IncomeContainer, IncomeNav, IncomeMain } from "./IncomePageElements";

const IncomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <IncomeContainer>
      <IncomeNav>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar />
      </IncomeNav>
      <Header totalIncome={totalIncome} />
      <IncomeMain>
        <IncomeForm income={income} setIncome={setIncome} />
        <IncomeList income={income} setIncome={setIncome} />
      </IncomeMain>
    </IncomeContainer>
  );
};

export default IncomePage;
