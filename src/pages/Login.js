import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="container text-center mt-5">
    <h2>Login</h2>
    <form className="w-50 mx-auto mt-4">
      <input type="email" placeholder="Email" className="form-control mb-3" />
      <input type="password" placeholder="Password" className="form-control mb-3" />
      <Link to="/tickets" className="btn btn-primary w-100">Submit</Link>
    </form>
    <Link to="/home" className="d-block mt-3">Back to Home</Link>
  </div>
);

export default Login;
