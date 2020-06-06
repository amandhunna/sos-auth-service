const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

const loginController = require('./controller/Login');

const orderController = require('./controller/order');
const productController = require('./controller/product');
const storeController = require('./controller/store');
const userController = require('./controller/user');


const { verifyUser } = middleware;
router.use(verifyUser)

router.get('/login', loginController.login);
router.get('/order', orderController.get);
// router.get('/product', productController.get);
// router.get('/store', storeController.get);
// router.get('/user', userController.get);

module.exports = router;