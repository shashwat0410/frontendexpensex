import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from '../ExpenseForm';
import ExpenseList from '../ExpenseList';
import './App.css'

const EmployeeDashboard = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showExpenseList, setShowExpenseList] = useState(false);
  const [employeeExpenses, setEmployeeExpenses] = useState([]);

  useEffect(() => {
    // Fetch the expenses submitted by the logged-in employee
    fetchEmployeeExpenses();
  }, []);

  const fetchEmployeeExpenses = async () => {
    try {
      // Make an API call to fetch the employee's expenses
      const response = await axios.get('https://localhost:7173/api/ExpensesAPI');
      setEmployeeExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowExpenseForm = () => {
    setShowExpenseForm(true);
    setShowExpenseList(false);
  };

  const handleShowExpenseList = () => {
    setShowExpenseForm(false);
    setShowExpenseList(true);
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Employee Dashboard</h2>
      <div className="dashboard-container">
        <button onClick={handleShowExpenseForm}>Expense Form</button>
        <button onClick={handleShowExpenseList}>Expense List</button>
      </div>
      {showExpenseForm && <ExpenseForm />}
      {showExpenseList && <ExpenseList />}
    </div>
  );
};

export default EmployeeDashboard;
