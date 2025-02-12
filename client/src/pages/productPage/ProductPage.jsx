import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useProductsService from '../../services/useProductsService';

import Card from '../../components/UI/card/Card';
import ModButton from '../../components/UI/button/ModButton';
import Modal from '../../components/UI/modal/Modal';

import { addProductToCart } from "../../http/cartApi";
import { SHOP_ROUTE } from '../../utils/consts';

import './productPage.scss';

const ProductPage = () => {
    const [product, setProduct] = useState({ info: [] });
    const [errorOpen, setErrorOpen] = useState(false);
    const [thanksOpen, setThanksOpen] = useState(false);
    const [cartError, setCartError] = useState('');
    const { getOneProduct, deleteProduct } = useProductsService();
    const { id } = useParams();
    const navigate = useNavigate();

    const { role } = useSelector(state => state.user.user);
    const { isAuth } = useSelector(state => state.user);

    useEffect(() => {
        getOneProduct(id).then(res => setProduct(res))
    }, [])

    const handleDeleteProductClick = () => {
        deleteProduct(id)
            .then(navigate(SHOP_ROUTE))

    }

    const user = useSelector(state => state.user.user);


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
                .catch(e => setCartError(e.response.data.message))
        }
    }

    const RenderDescription = () => {
        if (product.info) {
            return (
                <>
                    {
                        product.info.map(info => {
                            return (
                                <li className='productcard__info__item' key={info.id}>
                                    <div className='productcard__info__item__title'>
                                        {info.title}
                                    </div>
                                    <div className='productcard__info__item__desc'>{info.description}</div>
                                </li>
                            )
                        })
                    }
                </>
            )
        }
        return null
    }

    return (
        <div className="container">
            <div className='productpage'>
                <Modal active={errorOpen}
                    setActive={setErrorOpen}
                    className="productpage__modal">
                    <div>
                        Please log in to add item to cart
                    </div>
                </Modal>
                <Modal active={thanksOpen}
                    setActive={setThanksOpen}
                    className="productpage__modal">
                    <div>
                        Thank you! Item added to cart
                    </div>
                </Modal>
                <Card className='productpage__card'>

                    <div className='productcard'>
                        <div className="productcard__imgbox">
                            <img src={'http://localhost:5000' + '/' + product.img} alt="product photo" />
                        </div>
                        <div className="productcard__content">
                            <h1 className="productcard__title">{product.title}</h1>
                            <ul className="productcard__info">
                                <RenderDescription />
                                <li>
                                    {`Sales: ${product.sales}`}
                                </li>
                                {/* <li className='productcard__rating'>
                                    {product.rating}
                                </li> */}
                                <li>
                                    {`Price: ${product.price}$`}
                                </li>
                            </ul>
                            <div className="productcard__info__button">
                                <ModButton className="productcard__info__button" onClick={addToCart}>
                                    Add product to cart
                                    <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_9)">
                                            <path d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z" fill="#fff" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_9">
                                                <rect width="32" height="29" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </ModButton>
                                {cartError}
                            </div>
                            {
                                role === 'ADMIN' ?
                                    <button className='deletebutton' onClick={handleDeleteProductClick} >
                                        Delete product
                                    </button>
                                    :
                                    null
                            }
                        </div>
                    </div >
                </Card >
            </div>
        </div>
    );
}

export default ProductPage;