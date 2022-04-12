import React from "react";

function IncomeItem({ income, index, removeIncome, updateIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  const updateHandle = (i) => {
    updateIncome(i);
  };

  return (
    <div className="income-item">
      <div className="bar">
        <div className="desc">{income.desc}</div>
      </div>
      <div className="bar">
        <div className="price">${income.price}</div>
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

export default IncomeItem;
