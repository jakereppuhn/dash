import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import {
  ExpenseContainer,
  ExpenseNav,
  ExpenseHeader,
  ExpenseMain,
} from "./ExpensesPageElements";

const ExpensesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ExpenseContainer>
        <ExpenseNav>
          <Navbar />
        </ExpenseNav>
        <ExpenseHeader>Expenses</ExpenseHeader>
        <ExpenseMain></ExpenseMain>
      </ExpenseContainer>
    </div>
  );
};

export default ExpensesPage;
