import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExpenseForm = ({ employee }) => {
  const [formData, setFormData] = useState({
    expenseId: 0,
    emp_Id: employee.emp_Id,
    description: '',
    amount: 0,
    receipt_no: 0,
    categoryId: 3,
    category: {
      category_Id: 0,
      category_Name: 'string',
      category_Limit: 0
    },
    status: 'Pending',
    managerId: 0,
    approvedAmount: 0,
    submissionDate: new Date().toISOString(),
    managerDate: new Date().toISOString()
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      emp_Id: employee.emp_Id
    }));
  }, [employee]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7173/api/ExpensesAPI', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Perform any necessary actions after successful expense creation
      toast.success('Expense created successfully!');
      console.log('Expense created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Expense</h2>
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emp_Id">Employee ID:</label>
          <input
            type="number"
            className="form-control"
            name="emp_Id"
            value={formData.emp_Id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="receipt_no">Receipt No.:</label>
          <input
            type="number"
            className="form-control"
            name="receipt_no"
            value={formData.receipt_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="number"
            className="form-control"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
          />
        </div>
        {/* Render other input fields for expense details */}
        {/* ... */}
        <button type="submit" className="btn btn-primary">Create Expense</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ExpenseForm;
