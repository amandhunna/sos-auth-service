const express = require('express');
const router = express.Router();

const middleware = require('./middleware');
const loginController = require('./controller/Login');


const { verifyUser } = middleware;
router.use(verifyUser)

router.get('/', loginController.login);

module.exports = router;