import React, { useState } from 'react';

import ShopList from '../../shopList/ShopList';
import SearchPanel from '../../searchPanel/SearchPanel';

import './shopPage.scss'

const ShopPage = () => {

    const [search, setSearch] = useState('');
    const [cheep, setCheep] = useState(true);

    const onSearchChange = (text) => {
        setSearch(text)
    }

    const updateCheepFilter = (filter) => {
        setCheep(filter)
    }

    return (
        <div className='container'>
            <div className="shopPage">
                <SearchPanel updateCheepFilter={updateCheepFilter} onSearchChange={onSearchChange} />
                <ShopList cheepFilter={cheep} search={search} />
            </div>
        </div>
    );
}

export default ShopPage;
