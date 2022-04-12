import React from "react";

function Header({ totalIncome }) {
  return (
    <header className="income-header">
      <div className="i-header-container">
        <div className="header-mtd">
          <h1>Income MTD:</h1>
          <h2 className="total-income">${totalIncome}</h2>
        </div>
        <div className="header-ytd">
          <h1>Income YTD:</h1>
          <h2 className="total-income">${totalIncome}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
