import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://localhost:7173/api/AdminAPI/GetCategories/category');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Category List</h2>
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.category_Id}>
              <td>{category.category_Id}</td>
              <td>{category.category_Name}</td>
              <td>{category.category_Limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
