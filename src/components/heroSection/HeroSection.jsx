import React from 'react';
import './heroSection.scss'

import ModButton from '../UI/button/ModButton';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__title">
                    Flowers, 🌻 <br />
                    what the world needs
                </div>
                <div className="hero__subtitle">
                    Browse between hundred of flowers
                </div>
                <ModButton className="hero__btn btn">Browse</ModButton>
            </div>
            <div className="hero__grid">
                <img src="/assets/hero/1.jpg" alt="flower" />
                <img src="/assets/hero/2.jpg" alt="flower" />
                <img src="/assets/hero/3.jpg" alt="flower" />
                <img src="/assets/hero/4.jpg" alt="flower" />
                <img src="/assets/hero/5.jpg" alt="flower" />
                <img src="/assets/hero/1.jpg" alt="flower" />
            </div>
        </section>
    );
}

export default HeroSection;
