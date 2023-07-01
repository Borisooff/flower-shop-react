import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import useProductsService from '../../services/useProductsService';

import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './shopList.scss';

const ShopList = () => {
    const { activeFilter } = useSelector(state => state.filters)
    const { productsLoadingStatus } = useSelector(state => state.products)

    const selectSearchQuery = state => state.search.search;
    const selectPriceFilter = state => state.priceFilter.priceFilter;
    const selectProducts = state => state.products.products;

    const selectSortedProducts = createSelector(
        [selectSearchQuery, selectPriceFilter, selectProducts],
        (searchQuery, priceFilter, products) => {
            let filteredProducts = products;

            if (searchQuery !== '') {
                const searchTerm = searchQuery.toLowerCase();
                filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchTerm));
            }

            const sortedProducts = [...filteredProducts];

            if (priceFilter === 'Cheap') {
                return sortedProducts.sort((product1, product2) => product1.price - product2.price);
            } else {
                return sortedProducts.sort((product1, product2) => product2.price - product1.price);
            }
        }
    );

    const sortedProducts = useSelector(selectSortedProducts);

    const { getAllProducts } = useProductsService()

    useEffect(() => {
        getAllProducts()
    }, [activeFilter]);

    return (
        <>
            <div className='shop'>
                {sortedProducts.map(item => {
                    const { id, ...itemProps } = item;
                    return <Card key={id} {...itemProps} />
                })}
                {productsLoadingStatus === 'error' ? <ErrorMessage /> : null}
            </div>
            {productsLoadingStatus === 'loading' ? <Spinner /> : null}
        </>
    );
}

export default ShopList;
