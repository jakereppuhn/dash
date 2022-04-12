import React from "react";

function ExpenseItem({ expense, index, removeExpense, updateExpense }) {
  let date = new Date(expense.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeExpense(i);
  };

  const updateHandle = (i) => {
    updateExpense(i);
  };

  return (
    <div className="expense-item">
      <div className="bar">
        <div className="desc">{expense.desc}</div>
      </div>
      <div className="bar">
        <div className="price">${expense.price}</div>
      </div>
      <div className="bar">
        <div className="date">{day + "/" + month + "/" + year}</div>
      </div>
      <div className="bar">
        <div className="btn-group">
          <button className="edit-item" onClick={() => updateHandle(index)}>
            Edit
          </button>
          <button className="remove-item" onClick={() => removeHandle(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
