import React, { useState } from 'react';
import ExpenseList from '../ExpenseList';
import PendingExpenses from '../PendingExpenses';

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
    <div>
      <h2>Manager Dashboard</h2>
      <div>
        <button onClick={handleShowExpenseList}>Show Expense List</button>
        <button onClick={handleShowPendingExpenses}>Show Pending Expenses</button>
      </div>
      {showExpenseList && <ExpenseList />}
      {showPendingExpenses && <PendingExpenses />}
    </div>
  );
};

export default ManagerDashboard;
