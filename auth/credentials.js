const jwt = require('jsonwebtoken');
const baseHelper = require('../util/helper');
const secretKey = "secretKey";
const User = require('../modal/user');

class Credentials {

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
