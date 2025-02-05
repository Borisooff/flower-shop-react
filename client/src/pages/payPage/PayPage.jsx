import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart } from "../../http/cartApi";
import { MAIN_ROUTE } from '../../utils/consts';

import Spinner from "../../components/spinner/Spinner";
import Card from '../../components/UI/card/Card';
import ModButton from '../../components/UI/button/ModButton';

import './payPage.scss';

const CartPage = () => {
    const { id } = useSelector(state => state.user.user);
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart(id);
                setCart(data);


            } catch (error) {
                console.error("Ошибка при загрузке корзины:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [id]);



    if (loading) {
        return <Spinner />;
    }

    const products = cart.cart_products;

    return (
        <div className='container'>
            <div className='productpage'>
                <Card>
                    <h1>Оставьте оценку</h1>
                    <div>
                        <ul className="cart__list">
                            {products.map((product, index) => (
                                <li className='cart__list__item' key={index}>
                                    <div className="cart__list__item__title">
                                        <img className='cart__list__item__img' src={'http://localhost:5000' + '/' + product.product.img} alt="product photo" />
                                        <div>
                                            {product.product.title}
                                        </div>
                                    </div>
                                    <div className="cart__list__item__title">
                                        <select name="category">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -0.5 32 32" fill="none">
                                            <path d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z" fill="#FFCB45" />
                                            <script xmlns="" /></svg>

                                        {product.product.price} $

                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="productpage__bottom">
                            <ModButton active="true" onClick={() => navigate(MAIN_ROUTE)}>
                                Готово
                            </ModButton>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default CartPage;