import React, { useEffect, useState } from 'react';
import useShopService from '../../services/shopService';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './shopList.scss';

const ShopList = ({ search, cheepFilter }) => {
    const { loading, error, getAllProducts } = useShopService();

    const [flowersList, setFlowersList] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllProducts()
            .then(setFlowersList)
    }

    const searchingFlowers = flowersList.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    let filteringFlowers = [];

    if (cheepFilter) {
        filteringFlowers = searchingFlowers.sort((product1, product2) => product1["price"] > product2["price"] ? 1 : -1)
    } else {
        filteringFlowers = searchingFlowers.sort((product1, product2) => product1["price"] < product2["price"] ? 1 : -1)

    }

    return (
        <>
            <div className='shop'>
                {filteringFlowers.map(item => {
                    const { id, ...itemProps } = item;
                    return <Card key={id} {...itemProps} />
                })}
                {error ? <ErrorMessage /> : null}
            </div>
            {loading ? <Spinner /> : null}
        </>
    );
}

export default ShopList;
