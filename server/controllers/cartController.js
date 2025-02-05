const { User, Cart, Product, CartProduct } = require('../models/models');
const ApiError = require('../error/ApiError');

class CartController {
    async addToCart(req, res, next) {
        const { userId, productId } = req.body;

        try {
            const [cart, created] = await Cart.findOrCreate({
                where: { userId: userId },
            });

            const [cartProduct, cartProductCreated] = await CartProduct.findOrCreate({
                where: {
                    CartId: cart.id,
                    productId: productId
                }
            });

            // Если продукт уже был в корзине, можно обновить его количество или другие параметры
            // if (!cartProductCreated) {
            //     // cartProduct.quantity += 1;
            //     // await cartProduct.save();
            // }

            return res.json({ message: 'Товар добавлен в корзину', productId: productId });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async getCart(req, res) {
        const userId = req.params.userId;

        console.log(userId)

        try {
            const cart = await Cart.findOne({
                where: { userId: userId },
                include: [{
                    model: CartProduct,
                    include: [Product]
                }]
            });

            if (!cart) {
                return res.status(404).json({ message: 'Корзина не найдена' });
            }

            res.json(cart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка при получении корзины', error });
        }
    }


    async delete(req, res) {
        const { cartId, productId } = req.params;

        try {
            const cart = await Cart.findByPk(cartId, {
                include: [{
                    model: CartProduct,
                    where: { productId: productId } 
                }]
            });

            if (!cart) {
                return res.status(404).json({ message: 'Корзина не найдена' });
            }

            const cartProduct = cart.cart_products[0]; 
            if (cartProduct) {
                await cartProduct.destroy(); 
                return res.json({ message: 'Товар удалён из корзины' });
            } else {
                return res.status(404).json({ message: 'Товар не найден в корзине' });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
    }

    async buy(req, res) {
        const { cartId } = req.params; 
    
        try {
            const cartProducts = await CartProduct.findAll({
                where: { CartId: cartId },
            });
    
            if (cartProducts.length === 0) {
                return res.status(404).json({ message: 'В корзине нет товаров' });
            }
    
            const productIds = cartProducts.map(cartProduct => cartProduct.productId);
    
            await Product.increment('sales', { where: { id: productIds } });
    
            await CartProduct.destroy({ where: { CartId: cartId } });
    
            return res.json({ message: `Покупка успешно оформлена. Все товары из корзины ${cartId} удалены.` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ошибка при оформлении покупки' });
        }
    }
}

module.exports = new CartController();