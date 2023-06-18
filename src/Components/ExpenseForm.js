// import React, { useState } from 'react';
// import axios from 'axios';

// const ExpenseForm = () => {
//   const [expense, setExpense] = useState({
//     description: '',
//     amount: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/ExpensesAPI/PostExpense', expense);
//       console.log(response.data); // handle success
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Expense</h2>
//       <form class="my-form" onSubmit={handleSubmit}>
//         <div class="form-group">
//           <label for="description">Description:</label>
//           <input type="text" class="form-control" name="description" value={expense.description} onChange={handleChange} />
//         </div>
//         <div class="form-group">
//           <label for="amount">Amount:</label>
//           <input type="number" class="form-control" name="amount" value={expense.amount} onChange={handleChange} />
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ExpenseForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ExpenseForm = () => {
//   const [formData, setFormData] = useState({
//     expenseId: 0,
//     emp_Id: 0,
//     description: '',
//     amount: 0,
//     receipt_no: 0,
//     categoryId: 0,
//     status: 'Pending',
//     managerId: 2,
//     approvedAmount: 0,
//     submissionDate: new Date(),
//     managerDate: new Date()
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('https://localhost:7173/api/ExpensesAPI', formData);
//       // Perform any necessary actions after successful expense creation
//       console.log('Expense created successfully!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Expense</h2>
//         <form className="my-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="amount">Amount:</label>
//             <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="receipt_no">Receipt No.:</label>
//             <input type="number" className="form-control" name="receipt_no" value={formData.receipt_no} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="categoryId">Category ID:</label>
//             <input type="number" className="form-control" name="categoryId" value={formData.categoryId} onChange={handleChange} />
//           </div>
//           <button type="submit" className="btn btn-primary">Create Expense</button>
//         </form>

//     </div>
//   );
// };

// export default ExpenseForm;

import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    expenseId: 0,
    emp_Id: 0,
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
        <button type="submit" className="btn btn-primary">Create Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
