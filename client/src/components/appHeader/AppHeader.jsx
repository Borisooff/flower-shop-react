import { Link, NavLink } from 'react-router-dom';
import React from 'react';

import './appHeader.scss'
import { ABOUT_ROUTE, BLOG_ROUTE, CART_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';

const AppHeader = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <Link to={MAIN_ROUTE} className="header__imgbox">
            <img src="/assets/header/logo-header.svg" alt="flower shop" />
          </Link>
          <nav className='header__nav'>
            <NavLink
              className='header__nav__link'
              end
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to={MAIN_ROUTE}>Home</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to={SHOP_ROUTE}>Shop</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to={BLOG_ROUTE}>Blog</NavLink>
            <NavLink
              className='header__nav__link'
              style={({isActive}) => ({color: isActive ? '#FF8F52' : 'inherit'}) }
              to={ABOUT_ROUTE}>About</NavLink>
          </nav>
          <div className='header__user-nav'>
            <NavLink to={LOGIN_ROUTE} className="header__nav__item">
              <img src="/assets/header/prof.svg" alt="profile" />
            </NavLink>
            <NavLink to={CART_ROUTE} className="header__nav__item">
              <img src="/assets/header/cart.svg" alt="cart" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
