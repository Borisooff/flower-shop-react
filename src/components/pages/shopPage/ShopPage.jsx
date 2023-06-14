import React from 'react';

import ShopList from '../../shopList/ShopList';
import SearchPanel from '../../searchPanel/SearchPanel';

import './shopPage.scss'

const ShopPage = () => {
    return (
        <div className='container'>
            <div className="shopPage">
                <SearchPanel />
                <ShopList />
            </div>
        </div>
    );
}

export default ShopPage;
