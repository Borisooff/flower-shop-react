import { Link, NavLink } from 'react-router-dom';
import React from 'react';

import './appHeader.scss'

const AppHeader = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <Link to='/' className="header__imgbox">
            <img src="/assets/header/logo-header.svg" alt="flower shop" />
          </Link>
          <nav className='header__nav'>
            <NavLink
              className='header__nav__link'
              end
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to="/">Home</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to="/shop">Shop</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to="/blog">Blog</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to="/about">About</NavLink>
          </nav>
          <div className='header__user-nav'>
            <a className="header__nav__item">
              <img src="/assets/header/prof.svg" alt="profile" />
            </a>
            <a className="header__nav__item">
              <img src="/assets/header/cart.svg" alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
