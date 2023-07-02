import React from 'react';

import Card from '../UI/card/Card';

import './productCard.scss';

const ProductCard = ({img, title, price}) => {
    return (
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
    );
}

export default ProductCard;
