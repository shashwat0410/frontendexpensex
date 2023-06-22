import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from '../ExpenseForm';
import ExpenseList from '../ExpenseList';
import './App.css';
import { useNavigate } from 'react-router-dom';


const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showExpenseList, setShowExpenseList] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [employeeExpenses, setEmployeeExpenses] = useState([]);

  useEffect(() => {
    // Fetch the logged-in employee details
    fetchEmployee();
    // Fetch the expenses submitted by the logged-in employee
    fetchEmployeeExpenses();
  }, []);

  const fetchEmployee = async () => {
    try {
      // Make an API call to fetch the logged-in employee details
      const response = await axios.get('https://localhost:7173/api/AdminAPI/GetEmployee');
      const employees = response.data;
      const loggedInEmployee = employees.find((emp) => emp.email === sessionStorage.getItem('email'));
      setEmployee(loggedInEmployee);
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleLogout = () => {
    // Clear user session from session storage
    sessionStorage.clear();
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Employee Dashboard</h2>
      <div className="user-details">
        {employee && (
          <>
            <p>Name: {employee.first_Name} {employee.last_Name}</p>
            <p>Email: {employee.email}</p>
            <p>Employee ID: {employee.emp_Id}</p>

          </>
        )}
      </div>
      <div className="dashboard-container">
        <button onClick={handleShowExpenseForm}>Expense Form</button>
        <button onClick={handleShowExpenseList}>Expense List</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {showExpenseForm && employee && <ExpenseForm employee={employee} />}
      {showExpenseList && <ExpenseList />}
    </div>
  );
};

export default EmployeeDashboard;

