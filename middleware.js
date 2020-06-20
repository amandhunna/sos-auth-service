const jwt = require('jsonwebtoken');
const baseHelper = require('./util/helper');
const logger = require('./util/logger');
const secretKey = "secretKey";

const middleware = {
    debugHelper(req, res, next) {
        console.log("hi, ", req.body);
        next();
    },

    trimmer(req, res, next) {
        for (const [key, value] of Object.entries(req.body)) {
            if (typeof req.body[key] === "string") {
                req.body[key] = value.trim();
            }
        }
        next();
    },

    verifyToken(req, res, next) {
        // Format of token
        // Authorization: Bearer <access_token>
        // Get auth header value
        const bearerHeader = req.headers['authorization']
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            jwt.verify(req.token, secretKey, (err, currentUser) => {
                if (err) {
                    logger.error("verify token error", err);
                    baseHelper.error(res, { status: 403, message: err.message }, 200);
                } else {
                    req.currentUser = currentUser
                    next();
                }
            })
        } else {
            const error = "Token not found"
            baseHelper.error(res, error, 403);
        }
    }
}

module.exports = middleware;
