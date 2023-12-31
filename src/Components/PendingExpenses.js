import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PendingExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchPendingExpenses();
  }, []);

  const fetchPendingExpenses = async () => {
    try {
      const response = await axios.get('https://localhost:7173/api/ManagerAPI/GetPendingExpenses');
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.put(`https://localhost:7173/api/ManagerAPI/RejectExpense/${id}`);
      console.log(response.data);
      toast.error('Expense rejected.'); // handle success
      fetchPendingExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(`https://localhost:7173/api/ManagerAPI/AcceptExpense/${id}`);
      console.log(response.data);
      toast.success('Expense accepted.'); // handle success
      fetchPendingExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Pending Expenses</h2>
      <table className="table table-light table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Receipt No.</th>
            <th scope="col">Status</th>
            <th scope="col">Accept</th>
            <th scope="col">Reject</th>
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
              <td>
              <button className="btn btn-success" onClick={() => handleAccept(expense.expenseId)}>Accept</button>
              </td>
              <td>
              <button className="btn btn-danger" onClick={() => handleReject(expense.expenseId)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default PendingExpenses;
