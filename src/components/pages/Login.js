import React from 'react';

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <input type="email" className="form-control" placeholder="Enter Email" />
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
      />
    </div>
  );
};

export default Login;
