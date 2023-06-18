// export default function Login() {
//     return(
//         <div className="row justify-content-center pt-5">
//             <div className="col-sm-6">
//                 <div className="card p-4">
//                     <div class="form-group">
//                         <label for="email">Email address:</label>
//                         <input type="email" class="form-control" id="email" />
//                     </div>
//                     <div class="form-group mt-3">
//                         <label for="pwd">Password:</label>
//                         <input type="password" class="form-control" id="pwd" />
//                     </div>
//                     <button type="button" class="btn btn-primary mt-4">Submit</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Dashboards/AdminDashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make a POST request to your API for authentication
      const response = await fetch('https://localhost:7173/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check the response for authentication success/failure
      if (response.ok) {
        // Get the JWT token from the response
        const { token } = await response.json();

        // Store the token in local storage or any secure storage mechanism
        localStorage.setItem('token', token);

        // Redirect the user to the appropriate dashboard based on input values
        if (email === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
      } else {
        // Handle authentication failure, show error message, etc.
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
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
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;

