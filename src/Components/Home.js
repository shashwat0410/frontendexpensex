import React from 'react';
import '../App.css'
import Photo1 from '../1.jpg';
import Photo2 from '../2.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ExpenseX</h1>
      <div className="application-info">
        <p className='lead'>ExpenseX is an employee expenditure management system designed to help you track 
        and manage your expenses efficiently. ExpenseX is a powerful expense management system that allows you
         to efficiently manage and track expenses for your organization.</p>
         <p>
        With ExpenseX, you can streamline your expense reporting process, gain insights into spending patterns,
         and make informed financial decisions.
      </p>
      
      </div>
      <div className="photos">
        <img src={Photo1} alt="Photo 1" />
        <img src={Photo2} alt="Photo 2" />
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Key Features:</h2>
          <ul>
            <li>Submit and track expense reports</li>
            <li>Manage employee profiles and roles</li>
            <li>Generate expense reports and analytics</li>
            <li>Assign and manage expense approval workflows</li>
            <li>Integrate with your existing accounting systems</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Getting Started:</h2>
          <p>
            To get started, please log in using your credentials. If you don't have an account, please contact your administrator to get access.
          </p>
          <p>
            Once logged in, you'll have access to the dashboard based on your role. From there, you can perform various tasks and manage your expenses efficiently.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
