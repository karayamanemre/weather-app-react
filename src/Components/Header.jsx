import React from 'react';

const Header = (props) => {
  return (
    <header>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="city" placeholder="Search City"/>
        <input type="submit" value="Search City"/>
        <label>
          <label class="switch">
            <input type="checkbox" onChange={props.handleToggle}/>
            <span class="slider"></span>
            <span class="text f">°F</span>
            <span class="text c">°C</span>
          </label>
        </label>
      </form>
    </header>
  );
};

export default Header;
