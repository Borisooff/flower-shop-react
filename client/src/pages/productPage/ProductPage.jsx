import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useProductsService from '../../services/useProductsService';

import Card from '../../components/UI/card/Card';

const ProductPage = () => {
    const [product, setProduct] = useState({ info: [] });
    const { getOneProduct } = useProductsService();
    const { id } = useParams();

    useEffect(() => {
        setProduct(getOneProduct(id))
    }, [])

    return (
        <Card>
            <div className="productCard__imgbox">
                <img src={'http://localhost:5000' + '/' + product.img} alt="" />
            </div>
        </Card>
    );
}

export default ProductPage;