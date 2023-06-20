import React, { useState } from 'react';
import CategoryForm from '../CategoryForm';
import CategoryList from '../CategoryList';
import EmployeeForm from '../EmployeeForm';
import EmployeeList from '../EmployeeList';
import './App.css'

const AdminDashboard = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false);

  const handleShowCategoryForm = () => {
    setShowCategoryForm(true);
    setShowCategoryList(false);
    setShowEmployeeForm(false);
    setShowEmployeeList(false);
  };

  const handleShowCategoryList = () => {
    setShowCategoryForm(false);
    setShowCategoryList(true);
    setShowEmployeeForm(false);
    setShowEmployeeList(false);
  };

  const handleShowEmployeeForm = () => {
    setShowCategoryForm(false);
    setShowCategoryList(false);
    setShowEmployeeForm(true);
    setShowEmployeeList(false);
  };

  const handleShowEmployeeList = () => {
    setShowCategoryForm(false);
    setShowCategoryList(false);
    setShowEmployeeForm(false);
    setShowEmployeeList(true);
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Admin Dashboard</h2>
      <div className="dashboard-container">
        <button onClick={handleShowCategoryForm}>Category Form</button>
        <button onClick={handleShowCategoryList}>Category List</button>
        <button onClick={handleShowEmployeeForm}>Employee Form</button>
        <button onClick={handleShowEmployeeList}>Employee List</button>
      </div>
      {showCategoryForm && <CategoryForm />}
      {showCategoryList && <CategoryList />}
      {showEmployeeForm && <EmployeeForm />}
      {showEmployeeList && <EmployeeList />}
    </div>
  );
};

export default AdminDashboard;
