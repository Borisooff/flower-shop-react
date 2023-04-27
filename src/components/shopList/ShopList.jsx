import React, { useEffect, useState } from 'react';
import useShopService from '../../services/shopService';
import Card from '../card/Card';

import './shopList.scss';

const ShopList = () => {
    const { loading, error, getAllProducts } = useShopService();

    const [shopList, setShopList] = useState([]);
    const [productsLoading, setPrductsLoading] = useState(false);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllProducts()
        .then(onProductsLoading)
    }

    const onProductsLoading = (newShopList) => {
        setShopList(shopList => [...shopList, ...newShopList])
    }

    return (
        <div className='shop'>
            {shopList.map(item => {
                const { id, ...itemProps } = item;
                return <Card key={id} {...itemProps} />
            })}
        </div>
    );
}

export default ShopList;
