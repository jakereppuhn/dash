import React, { useRef, useEffect } from "react";

function ExpenseForm({ expense, setExpense, editExpense }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddExpense = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setExpense([
      ...expense,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    editExpense([
      ...expense,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="expense-form" onSubmit={AddExpense}>
      <div className="form-inner">
        <div className="bar">
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            ref={desc}
          />
        </div>
        <div className="bar">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Amount"
            ref={price}
            step="any"
          />
        </div>
        <div className="bar">
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            ref={date}
          />
        </div>
        <div className="bar">
          <input className="add-btn" type="submit" value="Add" />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
