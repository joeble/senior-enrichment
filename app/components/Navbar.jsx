import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar () {

  //adding a NavLink or Link causes the whole page to stop rendering
  return (
    <div>
      <h1>Welcome to Universe University!</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
      </ul>
    </div>
  );

}
