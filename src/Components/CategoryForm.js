import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryForm = () => {
  const [category, setCategory] = useState({
    category_Id: 0,
    category_Name: '',
    category_Limit: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://localhost:7173/api/AdminAPI/PutCategory/category/${category.category_Id}`, category, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Perform any necessary actions after successful category update
      toast.success('Category limit updated successfully!');
      console.log('Category limit updated successfully!');
      setCategory({
        category_Id: 0,
        category_Name: '',
        category_Limit: 0
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to update category limit');
    }
  };

  return (
    <div>
      <h2>Change Category Limit</h2>
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category_Id">Category ID:</label>
          <input
            type="number"
            className="form-control"
            name="category_Id"
            value={category.category_Id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category_Name">Category Name:</label>
          <input
            type="text"
            className="form-control"
            name="category_Name"
            value={category.category_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category_Limit">Category Limit:</label>
          <input
            type="number"
            className="form-control"
            name="category_Limit"
            value={category.category_Limit}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Category Limit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CategoryForm;
