const baseHelper = require('../util/helper');
const logger = require('../util/logger');
const userService = require('../service/user');

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
}

module.exports = new UserController();
