import React, { useEffect, useState } from 'react';
import useShopService from '../../services/shopService';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './shopList.scss';

const ShopList = ({search}) => {
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

    return (
        <div className='shop'>
            {searchingFlowers.map(item => {
                const { id, ...itemProps } = item;
                return <Card key={id} {...itemProps} />
            })}
            {loading ? <Spinner /> : null}
            {error ? <ErrorMessage /> : null}
        </div>
    );
}

export default ShopList;
