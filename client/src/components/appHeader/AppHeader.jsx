import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ABOUT_ROUTE, ADMIN_ROUTE, BLOG_ROUTE, CART_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';

import './appHeader.scss'

const AppHeader = () => {
  const { isAuth } = useSelector(state => state.user);
  const { email, role } = useSelector(state => state.user.user);

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
              style={({ isActive }) => ({ color: isActive ? '#FF8F52' : 'inherit' })}
              to={MAIN_ROUTE}>Home</NavLink>
            <NavLink
              className='header__nav__link'
              style={({ isActive }) => ({ color: isActive ? '#FF8F52' : 'inherit' })}
              to={SHOP_ROUTE}>Shop</NavLink>
            <NavLink
              className='header__nav__link'
              style={({ isActive }) => ({ color: isActive ? '#FF8F52' : 'inherit' })}
              to={BLOG_ROUTE}>Blog</NavLink>
            <NavLink
              className='header__nav__link'
              style={({ isActive }) => ({ color: isActive ? '#FF8F52' : 'inherit' })}
              to={ABOUT_ROUTE}>About</NavLink>
              {
              role === 'ADMIN' ?
                <NavLink 
                to={ADMIN_ROUTE} 
                className="header__nav__link"
                style={({ isActive }) => ({ color: isActive ? '#FF8F52' : 'inherit' })}>
                  Admin panel
                </NavLink> :
                null
            }
          </nav>
          <div className='header__user__nav'>
            
            {
              isAuth ?
                <span className="header__nav__item">{email}</span>
                :
                <NavLink to={LOGIN_ROUTE} className="header__nav__item">
                  <img src="/assets/header/prof.svg" alt="profile" />
                </NavLink>
            }
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
