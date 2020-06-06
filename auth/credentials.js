const jwt = require('jsonwebtoken');
const baseHelper = require('../util/helper');
const secretKey = "secretKey";

class Credentials {

    login(req, res, next) {
        const data = {
            username: 'aman',
            password: 'aman123'
        }
        const expiresIn = '30m'

        jwt.sign({ user: data }, secretKey, { expiresIn }, (err, token) => {
            if (err) {

                baseHelper.err(res, err)
            } else {
                baseHelper.success(res, token)
            }
        });
        next();
    }
}

module.exports = new Credentials();
