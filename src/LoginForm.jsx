import React from 'react';

const LoginForm = (props) => {
    return (
      <div>
        <form action="/login" method="post">
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <input type="submit" value="Login"/>
        </form>
        <form action="/signup" method="post">
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <input type="submit" value="Sign up"/>
        </form>
        <a href="/signup">Create an account.</a>
      </div>
    );
};

module.exports = LoginForm;