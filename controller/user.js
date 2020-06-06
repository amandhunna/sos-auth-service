const baseHelper = require('../util/helper');
const logger = require('../util/logger');
const userService = require('../service/user');
const User = require('../modal/user');

class UserController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = req.body;
            const response = await userService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async signUp(req, res) {
        try {
            const data = { ...req.body };
            const user = new User();
            user.setPassword(req.body.password);
            const newData = { ...data, ...user._doc }
            delete newData.password;
            const response = await userService.create(newData)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }
}

module.exports = new UserController();
