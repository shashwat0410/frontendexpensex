import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css'
import AdminDashboard from './Components/Dashboards/AdminDashboard';
import ManagerDashboard from './Components/Dashboards/ManagerDashboard';
import EmployeeDashboard from './Components/Dashboards/EmployeeDashboard';

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">ExpenseX - Employee Expenditure Management System</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login Page</Link></li>
          <li><Link to="/dashboard">Expense Status</Link></li>
        </ul>
      </div>
    </nav>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
