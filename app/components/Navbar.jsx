import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar () {

  //adding a NavLink or Link causes the whole page to stop rendering
  return (
    <div className="Header">
      <h1 className="myBoi">Welcome to Universe University!</h1>
      <ul>
        <li>
          <NavLink className="NavLink" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/students">Students</NavLink>
        </li>
      </ul>
    </div>
  );

}
