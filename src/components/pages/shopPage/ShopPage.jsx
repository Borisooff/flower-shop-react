import React, { useState } from 'react';

import ShopList from '../../shopList/ShopList';
import SearchPanel from '../../searchPanel/SearchPanel';

import './shopPage.scss'

const ShopPage = () => {

    const [search, setSearch] = useState('');

    const onSearchChange = (text) => {
        setSearch(text)
    }

    return (
        <div className='container'>
            <div className="shopPage">
                <SearchPanel onSearchChange={onSearchChange} />
                <ShopList search={search} />
            </div>
        </div>
    );
}

export default ShopPage;
