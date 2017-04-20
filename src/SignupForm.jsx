import React from 'react';

const SignupForm = (props) => {
    return (
      <div>
        <form onSubmit={props.signup} >
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <input type="submit" value="Sign up"/>
        </form>
        <a href="/login">Log into your account.</a>
      </div>
    );
};

export default SignupForm;


