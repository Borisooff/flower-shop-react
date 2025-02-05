const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const cartRouter = require('./cartRouter');

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/cart', cartRouter)

module.exports = router