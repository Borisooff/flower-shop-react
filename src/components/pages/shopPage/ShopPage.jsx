import React, { useState } from 'react';

import ShopList from '../../shopList/ShopList';
import SearchPanel from '../../searchPanel/SearchPanel';

import './shopPage.scss'

const ShopPage = () => {
    const [cheep, setCheep] = useState(true);

    const updateCheepFilter = (filter) => {
        setCheep(filter)
    }

    return (
        <div className='container'>
            <div className="shopPage">
                <SearchPanel updateCheepFilter={updateCheepFilter} />
                <ShopList cheepFilter={cheep} />
            </div>
        </div>
    );
}

export default ShopPage;
