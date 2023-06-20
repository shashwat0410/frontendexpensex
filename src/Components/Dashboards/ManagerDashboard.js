import React, { useState } from 'react';
import ExpenseList from '../ExpenseList';
import PendingExpenses from '../PendingExpenses';
import './App.css'

const ManagerDashboard = () => {
  const [showExpenseList, setShowExpenseList] = useState(false);
  const [showPendingExpenses, setShowPendingExpenses] = useState(false);

  const handleShowExpenseList = () => {
    setShowExpenseList(true);
    setShowPendingExpenses(false);
  };

  const handleShowPendingExpenses = () => {
    setShowExpenseList(false);
    setShowPendingExpenses(true);
  };

  return (
<div className="dashboard">
      <h2 className="dashboard-heading">Manager Dashboard</h2>
      <div className="button-container">
        <button onClick={handleShowExpenseList}>Show Expense List</button>
        <button onClick={handleShowPendingExpenses}>Show Pending Expenses</button>
      </div>
      {showExpenseList && <ExpenseList />}
      {showPendingExpenses && <PendingExpenses />}
    </div>
  );
};

export default ManagerDashboard;
