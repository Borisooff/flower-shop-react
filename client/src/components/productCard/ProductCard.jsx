import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../UI/card/Card';
import { PRODUCT_ROUTE } from '../../utils/consts';

import './productCard.scss';

const ProductCard = ({ img, title, price, id }) => {
    return (
        <Link to={PRODUCT_ROUTE +'/' + id}>
            <Card>
                <div className="card__imgbox">
                    <img src={'http://localhost:5000/' + img} alt={title} />
                </div>
                <div className="card__title">{title}</div>
                <div className="card__content">
                    <div className="card__price">{price}$</div>
                    <div className="card__cart">Add to cart</div>
                </div>
            </Card>
        </Link>
    );
}

export default ProductCard;
