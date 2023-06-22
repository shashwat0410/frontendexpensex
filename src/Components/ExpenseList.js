import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('https://localhost:7173/api/ExpensesAPI');
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Expense List</h2>
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Receipt No.</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expenseId}>
              <td>{expense.expenseId}</td>
              <td>{expense.emp_Id}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.receipt_no}</td>
              <td>{expense.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
