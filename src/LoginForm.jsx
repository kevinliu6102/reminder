import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.login}>
        <input type="text" name="username" placeholder="Enter your username"/>
        <input type="password" name="password" placeholder="Enter your password"/>
        <input type="submit" value="Login"/>
      </form>
      <Link to="/signup">Create an account.</Link>
    </div>
  );
};

export default LoginForm;