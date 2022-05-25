import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  <header>
    <NavLink to="/">
      <img src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </NavLink>
    <nav>
      <ul>
        <li>
          <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/myprofile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>

  </header>;
};

export default Header;
