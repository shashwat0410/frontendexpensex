import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    emp_Id: 0,
    first_Name: '',
    last_Name: '',
    email: '',
    password: '',
    role_Id: 0,
    role: {
      role_Id: 0,
      role_Name: '',
    },
  });

  const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to submit the employee data
      const response = await axios.post('https://localhost:7173/api/AdminAPI/PostEmployee', employeeData);
      console.log(response.data); // Log the response from the server
      // Clear the form after successful submission
      setEmployeeData({
        emp_Id: 0,
        first_Name: '',
        last_Name: '',
        email: '',
        password: '',
        role_Id: 0,
        role: {
          role_Id: 0,
          role_Name: '',
        },
      });
      setIsEmployeeAdded(true);
      toast.success('Employee added successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Employee Form</h3>
      {isEmployeeAdded && <p>Employee added successfully!</p>}
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_Name">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="first_Name"
            value={employeeData.first_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_Name">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="last_Name"
            value={employeeData.last_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={employeeData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role_Id">Role ID:</label>
          <input
            type="number"
            className="form-control"
            name="role_Id"
            value={employeeData.role_Id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role_Name">Role Name:</label>
          <input
            type="text"
            className="form-control"
            name="role_Name"
            value={employeeData.role.role_Name}
            onChange={(e) =>
              setEmployeeData((prevData) => ({
                ...prevData,
                role: { ...prevData.role, role_Name: e.target.value },
              }))
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EmployeeForm;
