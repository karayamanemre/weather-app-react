import React from 'react';

const Header = (props) => {
  return (
    <header>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="city" placeholder="Search City"/>
        <input type="submit" value="Search"/>
        <label class="switch">
          <input type="checkbox" onChange={props.handleToggle}/>
          <span class="slider"></span>
        </label>
      </form>
    </header>
  );
};

export default Header;
