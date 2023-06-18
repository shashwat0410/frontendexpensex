import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [category, setCategory] = useState('');
  const [categoryLimit, setCategoryLimit] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/AdminAPI/PostCategory', { name: category });
      console.log(response.data); // handle success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" value={category} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label for="categoryLimit">Category Limit:</label>
          <input type="text" className="form-control" value={categoryLimit} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  );
};

export default CategoryForm;
{/* <div className="col-sm-6">
<div className="card p-4">
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="form-group mt-3">
    <label htmlFor="pwd">Password:</label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button
    type="button"
    className="btn btn-primary mt-4"
    onClick={handleLogin}
  >
    Submit
  </button>
</div> */}