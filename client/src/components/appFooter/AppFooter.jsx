import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ABOUT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';

import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__inner'>
                    <div className="footer__col">
                        <Link to={MAIN_ROUTE} className="footer__imbox">
                            <img src="/assets/footer/logo-footer.svg" alt="flower shop" />
                        </Link>
                        <div className="footer-discription">
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Links</div>
                        <NavLink to={MAIN_ROUTE} className="footer__link">Home</NavLink>
                        <NavLink to={SHOP_ROUTE} className="footer__link">Shop</NavLink>
                        <NavLink to={ABOUT_ROUTE} className="footer__link">About</NavLink>
                        <NavLink to={LOGIN_ROUTE} className="footer__link">Login</NavLink>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Contacts</div>
                        <span className='footer__contacts map'>26985 Brighton Lane, Lake Forest, CA</span>
                        <a className='footer__contacts mail' href="mailto: support@Flowers.com">support@Flowers.com</a>
                        <a className='footer__contacts tel' href="tel: +12365489" >+1 236 5489</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
