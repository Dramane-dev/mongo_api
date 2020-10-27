import React from 'react';
import logo from '../logo.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../logo.svg')} alt='logo' /> */}
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/users' activeStyle>
            Users
          </NavLink>
          <NavLink to='/movies' activeStyle>
            Movies
          </NavLink>
          <NavLink to='/createUsers' activeStyle>
            createUsers
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;