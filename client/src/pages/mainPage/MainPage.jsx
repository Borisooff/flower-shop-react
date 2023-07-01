import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import BestSeleres from '../../components/bestSelers/BestSeleres';

const MainPage = () => {
    return (
        <div className='container'>
            <HeroSection />
            <BestSeleres />
        </div>
    );
}

export default MainPage;
