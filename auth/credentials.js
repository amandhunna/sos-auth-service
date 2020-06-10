const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const baseHelper = require('../util/helper');
const logger = require('../util/logger');
const userService = require('../service/user')
const secretKey = "secretKey";
const User = require('../modal/user');

class Credentials {
    async googleLogin(req, res) {
        const { CLIENT_ID, tokenId, data } = req.body;
        const client = new OAuth2Client(CLIENT_ID);

        // verify
        try {
            const ticket = await client.verifyIdToken({
                idToken: tokenId,
                audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userId = payload['sub'];
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
            if (userId) {
                const savedUser = await userService.create(data)
                return baseHelper.success(res, savedUser);
            }
            return baseHelper.error(res, 'user_creation failed');
        } catch (error) {
            logger.error(`google login error: ${error}`);
            if (error.stack.includes('Invalid token signature')) {
                return baseHelper.error(res, 'invalid_token_signature', 403);
            }

            if (error.stack.includes('Token used too late')) {
                return baseHelper.error(res, 'token_used_too_late', 408);
            }
            if (error.stack.includes('required_unique_email')) {
                return baseHelper.error(res, 'required_unique_email', 409);
            }

            return baseHelper.error(res, error.stack);
        }

    }


    async login(req, res) {
        const { username } = req.body;
        const expiresIn = '30d'

        const data = { username };

        const user = await User.findOne({ username });
        if (user === null) {
            const error = {
                error: "userNotFound",
                message: "User not found."
            }
            return baseHelper.error(res, error)
        }

        if (!user.validPassword(req.body.password)) {

            const error = {
                error: "wrongPassword",
                message: "Wrong password."
            }
            return baseHelper.error(res, error)
        }



        jwt.sign({ data }, secretKey, { expiresIn }, (err, token) => {
            if (err) {

                baseHelper.error(res, err)
            } else {
                baseHelper.success(res, token, 201)
            }
        });
    }
}

module.exports = new Credentials();
