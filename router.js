const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

const orderController = require('./controller/order');
const productController = require('./controller/product');
const storeController = require('./controller/store');
const userController = require('./controller/user');

const credentialController = require('./auth/credentials');

const { trimmer, verifyToken } = middleware;
router.use(trimmer)

router.post('/login', credentialController.login);
router.post('/signUp', userController.signUp);

router.use(verifyToken);

// order
router.post('/order', orderController.create);
router.get('/order', orderController.read);

// product
router.post('/product', productController.create);
router.get('/product', productController.read);
// router.get('/store', storeController.get);
// router.get('/user', userController.get);


// store
router.post('/store', storeController.create);
router.get('/store', storeController.read);
// user
router.post('/user', userController.create);
router.get('/user', userController.read);

module.exports = router;

/* trim: true,
lowercase:true, */