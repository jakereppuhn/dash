import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ExpenseForm from "../../components/ExpenseForm";
import ExpenseList from "../../components/ExpenseList";
import {
  ExpenseContainer,
  ExpenseNav,
  ExpenseMain,
  ExpenseHeader,
} from "./ExpensesPageElements";

const ExpensePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < expense.length; i++) {
      temp += parseInt(expense[i].price);
    }

    setTotalExpense(temp);
  }, [expense]);

  return (
    <ExpenseContainer>
      <ExpenseNav>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar />
      </ExpenseNav>
      <ExpenseHeader>Expense Tracker</ExpenseHeader>
      <ExpenseMain>
        <ExpenseForm expense={expense} setExpense={setExpense} />
        <ExpenseList expense={expense} setExpense={setExpense} />
      </ExpenseMain>
    </ExpenseContainer>
  );
};

export default ExpensePage;
