import React from 'react';

import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__inner'>
                    <div className="footer__col">
                        <a href='/' className="footer__imbox">
                            <img src="/assets/footer/logo-footer.svg" alt="flower shop" />
                        </a>
                        <div className="footer-discription">
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                            Some random stuff about flower shop and some more info cuz this box had to get fill
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Links</div>
                        <a href="#" className="footer__link">Home</a>
                        <a href="#" className="footer__link">Shop</a>
                        <a href="#" className="footer__link">About</a>
                        <a href="#" className="footer__link">Login</a>
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
