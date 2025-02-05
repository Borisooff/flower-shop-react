const Router = require('express');
const router = new Router();
const cartController = require('../controllers/cartController');

router.post('/add-to-cart', cartController.addToCart);
router.post('/buy/:cartId', cartController.buy);
router.get('/:userId', cartController.getCart);
router.delete('/:cartId/products/:productId', cartController.delete);

module.exports = router;