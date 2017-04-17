import React from 'react';

const NamePicker = (props) => {
    return (
      <form onSubmit={props.submitUsername}>
        <input type="text" placeholder="Enter your username"/>
      </form>
    );
};

module.exports = NamePicker;