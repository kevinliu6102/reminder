import React from 'react';

const LoginForm = (props) => {
    return (
      <div>
        <form onSubmit={props.login} >
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <input type="submit" value="Login"/>
        </form>
        <a href="/signup">Create an account.</a>
      </div>
    );
};

export default LoginForm;