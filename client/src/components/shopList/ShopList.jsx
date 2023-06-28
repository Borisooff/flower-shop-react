import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';
import { createSelector } from '@reduxjs/toolkit';

import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './shopList.scss';

const ShopList = () => {
    const productsLoadingStatus = useSelector(state => state.products.productsLoadingStatus);
    const dispatch = useDispatch();
    // const filteredProducts = useSelector(state => {
    //     if (state.filters.activeFilter === 'all') {
    //         return state.products.products
    //     } else {
    //         return state.products.products.filter(product => product.category === state.filters.activeFilter)
    //     }
    // });
    // const searchedProducts = useSelector(state => {
    //     if (state.search.search === '') {
    //         return filteredProducts
    //     } else {
    //         return filteredProducts.filter(product => {
    //             return product.title.toLowerCase().includes(state.search.search.toLowerCase())
    //         })
    //     }

    // });
    // const priceSortedProducts = useSelector(state => {
    //     if (state.priceFilter.priceFilter === 'Cheap') {
    //         return [...searchedProducts].sort((product1, product2) => product1["price"] > product2["price"] ? 1 : -1)
    //     } else {
    //         return [...searchedProducts].sort((product1, product2) => product1["price"] < product2["price"] ? 1 : -1)
    //     }
    // })
    const selectActiveFilter = state => state.filters.activeFilter;
    const selectSearchQuery = state => state.search.search;
    const selectPriceFilter = state => state.priceFilter.priceFilter;
    const selectProducts = state => state.products.products;

    const selectSortedProducts = createSelector(
        [selectActiveFilter, selectSearchQuery, selectPriceFilter, selectProducts],
        (activeFilter, searchQuery, priceFilter, products) => {
            let filteredProducts = products;

            if (activeFilter !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === activeFilter);
            }

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

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

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
