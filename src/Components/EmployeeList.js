import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeList = () => {
const [employees, setEmployees] = useState([]);

useEffect(() => {
fetchEmployees();
}, []);

const fetchEmployees = async () => {
try {
const response = await axios.get('https://localhost:7173/api/AdminAPI/GetEmployee');
setEmployees(response.data);
} catch (error) {
console.error(error);
}
};

const deleteEmployee = async (employeeId) => {
  try {
    await axios.delete(`https://localhost:7173/api/AdminAPI/DeleteEmployee/${employeeId}`);
    // Refresh the employee list or perform any other necessary actions
    fetchEmployees();
    toast.success('Employee has been deleted.');
  } catch (error) {
    console.error(error);
  }
};


return (
<div>
<h2>Employee List</h2>
<table className="table table-dark table-hover">
<thead>
<tr>
<th>ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{employees.map((employee) => (
  <tr key={employee.emp_Id}>
    <td>{employee.emp_Id}</td>
    <td>{employee.first_Name}</td>
    <td>{employee.last_Name}</td>
    <td>{employee.email}</td>
    <td>
      <button
        onClick={() => deleteEmployee(employee.emp_Id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
))}

</tbody>
</table>
<ToastContainer />
</div>
);
};

export default EmployeeList;