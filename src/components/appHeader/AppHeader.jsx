import React from 'react';

import './appHeader.scss'

const AppHeader = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <a href='/' className="header__imgbox">
            <img src="/assets/header/logo-header.svg" alt="flower shop" />
          </a>
          <nav className='header__nav'>
            <a className='header__nav__link' href="#">Home</a>
            <a className='header__nav__link' href="#">Shop</a>
            <a className='header__nav__link' href="#">Blog</a>
            <a className='header__nav__link' href="#">About</a>
          </nav>
          <div className='header__user-nav'>
            <a className="header__profile">
              <img src="/assets/header/prof.svg" alt="profile" />
            </a>
            <a className="header__cart">
              <img src="/assets/header/cart.svg" alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
