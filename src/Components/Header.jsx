import React from 'react';

const Header = (props) => {
  return (
    <header class="bg-gray-200 flex p-4 items-center justify-center rounded-full shadow-xl border-2 border-gray-300">
      <form onSubmit={props.handleSubmit} class="flex items-center justify-center gap-4">
        <input type="text" name="city" placeholder="Search City" class="px-4 py-2 rounded-full"/>
        <input type="submit" value="Search" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"/>
        <label class="switch">
          <input type="checkbox" onChange={props.handleToggle}/>
          <span class="slider"></span>
        </label>
      </form>
    </header>
  );
};

export default Header;
