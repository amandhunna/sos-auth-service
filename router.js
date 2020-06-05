const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

const loginController = require('./controller/Login');

const orderController = require('./controller/order');
const productController = require('./controller/product');
const storeController = require('./controller/store');
const userController = require('./controller/user');

function trimmer(req, res, next) {
    for (const [key, value] of Object.entries(req.body)) {
        if (typeof req.body[key] === "string") {
            req.body[key] = value.trim();
        }
    }
    next();
}

const { verifyUser } = middleware;
router.use(verifyUser)
router.use(trimmer);

router.get('/login', loginController.login);
router.post('/order', orderController.create);
router.get('/order', orderController.get);
// router.get('/product', productController.get);
// router.get('/store', storeController.get);
// router.get('/user', userController.get);

module.exports = router;

/* trim: true,
        lowercase:true, */