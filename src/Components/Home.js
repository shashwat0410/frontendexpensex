import React from 'react';
import '../App.css'
import Photo1 from '../1.jpg';
import Photo2 from '../2.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ExpenseX</h1>
      <div className="application-info">
        <p className='lead'>ExpenseX is an employee expenditure management system designed to help you track and manage your expenses efficiently.</p>
      </div>
      <div className="photos">
        <img src={Photo1} alt="Photo 1" />
        <img src={Photo2} alt="Photo 2" />
      </div>
    </div>
  );
};

export default Home;
