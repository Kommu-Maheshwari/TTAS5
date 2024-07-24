import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Loginas = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <h2>Login</h2>
       
        <div className="mb-3">
          <Link to="/login" className="btn btn-success w-100 rounded-0 mb-2">Login as Admin</Link>
          <Link to="/dashboard/applicant" className="btn btn-success w-100 rounded-0 mb-2">Login as Applicant</Link>
        </div>
      </div>
    </div>
  );
};

export default Loginas;
