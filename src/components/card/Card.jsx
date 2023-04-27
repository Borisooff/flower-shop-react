import React from 'react';

import './card.scss';

const Card = ({url, title, price}) => {
    return (
        <div className='card'>
            <div className="card__imgbox">
                <img src={url} alt={title} />
            </div>
            <div className="card__title">{title}</div>
            <div className="card__content">
                <div className="card__price">{price}$</div>
                <div className="card__cart">Add to cart</div>
            </div>
        </div>
    );
}

export default Card;
