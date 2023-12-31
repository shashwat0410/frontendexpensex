import React, { useState } from 'react';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import AdminDashboard from './Dashboards/AdminDashboard';
import ManagerDashboard from './Dashboards/ManagerDashboard';
import EmployeeDashboard from './Dashboards/EmployeeDashboard';
import '../App.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword); // Update password state
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform validation and login logic here
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password.');
      return;
    }

    try {
      // Make API request to get user by email
      const response = await axios.get('https://localhost:7173/api/AdminAPI/GetEmployee');
      const employees = response.data;
      const employee = employees.find((emp) => emp.email === email);

      if (employee) {
        // Compare the hashed password with the user input
        const isPasswordValid = await bcrypt.compare(password, employee.password);

        if (isPasswordValid) {
          // Store user session in session storage
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('email', employee.email);
          sessionStorage.setItem('role', role);

          // Redirect to different dashboards based on the selected role
          switch (role) {
            case 'admin':
              navigate('/admin');
              break;
            case 'manager':
              navigate('/manager');
              break;
            case 'employee':
              navigate('/employee');
              break;
            default:
              alert('Please select a role.');
              break;
          }
        } else {
          alert('Invalid email or password.');
        }
      } else {
        alert('User not found.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login.');
    }
  };

  // const handleLogout = () => {
  //   // Clear user session from session storage
  //   sessionStorage.clear();

  //   // Redirect to the login page
  //   navigate('/login');
  // };

  return (
    <div>
      <h2>Login Form</h2>
          <form className="my-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <div>
              <div className="form-check">
                <input type="radio" id="admin" className="form-check-input" name="role" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} />
                <label className="form-check-label" htmlFor="admin">Admin</label>
              </div>
              <div className="form-check">
                <input type="radio" id="manager" className="form-check-input" name="role" value="manager" checked={role === 'manager'} onChange={() => setRole('manager')} />
                <label className="form-check-label" htmlFor="manager">Manager</label>
              </div>
              <div className="form-check">
                <input type="radio" id="employee" className="form-check-input" name="role" value="employee" checked={role === 'employee'} onChange={() => setRole('employee')} />
                <label className="form-check-label" htmlFor="employee">Employee</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        {/* //<button className="btn btn-secondary" onClick={handleLogout}>Logout</button> */}
        <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </div>
    </div>
    
  );
};

export default LoginForm;
