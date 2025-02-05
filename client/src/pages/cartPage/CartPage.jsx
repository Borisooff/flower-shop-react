import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart, deleteProductFromCart, buyCart } from "../../http/cartApi";
// import { PAY_ROUTE } from '../../utils/consts';

import Spinner from "../../components/spinner/Spinner";
import Card from '../../components/UI/card/Card';
import ModButton from '../../components/UI/button/ModButton';

import './cartPage.scss';

const CartPage = () => {
    const { id } = useSelector(state => state.user.user);
    const [cart, setCart] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart(id);
                setCart(data);
                setProducts(data.cart_products);

                // Подсчет общей стоимости товаров в корзине
                const total = data.cart_products.reduce((acc, product) => {
                    return acc + product.product.price;
                }, 0);

                setTotalPrice(total);
            } catch (error) {
                console.error("Ошибка при загрузке корзины:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [id]); // Добавили id в зависимости, чтобы обновить корзину при смене пользователя

    const deleteProduct = async (productId) => {
        try {
            await deleteProductFromCart(cart.id, productId);
            setCart(prevCart => ({
                ...prevCart,
                cart_products: prevCart.cart_products.filter(product => product.product.id !== productId)
            }));

            // Обновление общей стоимости
            const deletedProduct = cart.cart_products.find(product => product.product.id === productId);
            setTotalPrice(prevTotal => prevTotal - (deletedProduct.product.price));
        } catch (error) {
            console.error("Ошибка при удалении товара из корзины:", error);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    const handleBuy = async () => {
        try {
            await buyCart(cart.id); // Передаем cart.id для покупки
            setCart(null);
            setTotalPrice(0);
            setProducts([]); // Очищаем список продуктов
            // navigate(PAY_ROUTE);  // Рекомендуется раскомментировать и использовать при наличии маршрута оплаты
        } catch (error) {
            console.error("Ошибка при оформлении покупки:", error);
        }
    };

    return (
        <div className='container'>
            <div className='productpage'>
                <Card>
                    <h1>Корзина</h1>
                    {products.length < 1 ? (
                        <div>Корзина пуста</div>
                    ) : (
                        <div>
                            <ul className="cart__list">
                                {products.map((product, index) => (
                                    <li className='cart__list__item' key={index}>
                                        <div className="cart__list__item__title">
                                            <img className='cart__list__item__img' src={'http://localhost:5000/' + product.product.img} alt="product photo" />
                                            <div>
                                                {product.product.title}
                                            </div>
                                        </div>
                                        <div className="cart__list__item__price">
                                            {product.product.price} $
                                            <div className="delete__product" onClick={() => deleteProduct(product.product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="productpage__bottom">
                                <div className="total__price">
                                    {totalPrice.toFixed(2)} $
                                </div>
                                <ModButton active="true" onClick={handleBuy}>
                                    Купить
                                </ModButton>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}

export default CartPage;