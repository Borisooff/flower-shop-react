import React from 'react';

import ShopList from '../../components/shopList/ShopList';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import Pagination from '../../components/pagination/Pagination';

import './shopPage.scss'

const ShopPage = () => {
    return (
        <div className='container'>
            <div className="shopPage">
                <SearchPanel />
                <ShopList />
                <Pagination/>
            </div>
        </div>
    );
}

export default ShopPage;
