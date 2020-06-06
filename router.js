const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

// const loginController = require('./controller/Login');

const orderController = require('./controller/order');
const productController = require('./controller/product');
const storeController = require('./controller/store');
const userController = require('./controller/user');

const { verifyUser, trimmer } = middleware;
router.use(trimmer, verifyUser)

// order
router.post('/order', orderController.create);
// router.get('/order', orderController.get);

// product
router.post('/product', productController.create);
// router.get('/product', productController.get);
// router.get('/store', storeController.get);
// router.get('/user', userController.get);


// store
router.post('/store', storeController.create);

// user
router.post('/user', userController.create);
module.exports = router;

/* trim: true,
        lowercase:true, */