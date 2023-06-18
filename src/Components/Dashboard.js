import React, { useState, useEffect } from 'react';
import '../App.css'

const apiUrl = 'https://localhost:7173/api/ExpensesAPI';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const getCardColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Rejected':
        return 'red';
      default:
        return 'grey';
    }
  };

  return (
    <div className="dashboard">
      <h1>Expense Dashboard</h1>
      {expenses.map((expense) => (
        <div
          className="card"
          key={expense.expenseId}
          style={{ backgroundColor: getCardColor(expense.status) }}
        >

                <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Employee ID: {expense.emp_Id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Description: {expense.description}</h6>
                    <p className="card-text">Amount: {expense.amount}</p>
                    <p className="card-link" style={{backgroundColor: getCardColor(expense.status)}}>Status: {expense.status}</p>
                </div>
                </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

