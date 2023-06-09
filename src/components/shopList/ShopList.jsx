import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useShopService from '../../services/shopService';
import { productsFetched, productsFetching, productsFetchingError } from '../../actions';

import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './shopList.scss';

const ShopList = ({ cheepFilter }) => {
    const { searchedProducts, productsLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { getAllProducts } = useShopService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        dispatch(productsFetching())
        getAllProducts()
            .then(data => dispatch(productsFetched(data)))
            .catch(() => dispatch(productsFetchingError()))
    }

    let filteringFlowers = [];
        if (cheepFilter) {
            filteringFlowers = searchedProducts.sort((product1, product2) => product1["price"] > product2["price"] ? 1 : -1)
        } else {
            filteringFlowers = searchedProducts.sort((product1, product2) => product1["price"] < product2["price"] ? 1 : -1)
        }

    return (
        <>
            <div className='shop'>
                {filteringFlowers.map(item => {
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
