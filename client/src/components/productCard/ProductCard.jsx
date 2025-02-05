import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from '../UI/card/Card';
import Modal from '../../components/UI/modal/Modal';

import { PRODUCT_ROUTE } from '../../utils/consts';
import { addProductToCart } from '../../http/cartApi';

import './productCard.scss';

const ProductCard = ({ img, title, price, id }) => {

    const [errorOpen, setErrorOpen] = useState(false);
    const [thanksOpen, setThanksOpen] = useState(false);

    const user = useSelector(state => state.user.user);
    const { isAuth } = useSelector(state => state.user);


    const addToCart = async () => {
        if (!isAuth) {
            setErrorOpen(true)
        } else {
            const formData = new FormData()
            formData.append('userId', user.id)
            formData.append('productId', id)
            await addProductToCart(formData)
                .then(() => {
                    setThanksOpen(true)
                })
        }
    }

    return (
        <Link to={PRODUCT_ROUTE + '/' + id}>
            <Modal active={errorOpen}
                setActive={setErrorOpen}
                className="productpage__modal">
                <div>
                    Please, log in to add item to cart
                </div>
            </Modal>
            <Modal active={thanksOpen}
                setActive={setThanksOpen}
                className="productpage__modal">
                <div>
                    Thank you! Item added to cart
                </div>
            </Modal>
            <Card>
                <div className="card__imgbox">
                    <img src={'http://localhost:5000/' + img} alt={title} />
                </div>
                <div className="card__title">{title}</div>
                <div className="card__content">
                    <div className="card__price">{price}$</div>
                    <Link to={'#'} className="card__cart" onClick={addToCart}>Add to cart</Link>
                </div>
            </Card>
        </Link>
    );
}

export default ProductCard;
