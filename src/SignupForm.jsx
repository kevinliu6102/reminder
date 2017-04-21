import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
    return (
      <div>
        <form onSubmit={props.signup} >
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <input type="submit" value="Sign up"/>
        </form>
        <Link to="/Login">Sign into your account.</Link>
      </div>
    );
};

export default SignupForm;


