const baseHelper = require('../util/helper');
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

    async read(req, res) {
        try {
            const data = req.body;
            const response = await userService.read(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async update(req, res) {
        try {
            const data = req.body;
            const response = await userService.update(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async signUp(req, res) {
        try {
            const data = { ...req.body };
            const reqField = ["email", "firstName", "isSeller", "lastName", "location", "name", "password", "phone"];

            baseHelper.requiredFields(data, reqField);

            const user = new User();
            user.setPassword(req.body.password);
            const newData = { ...data, ...user._doc }
            delete newData.password;
            const response = await userService.create(newData)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error.stack)
        }
    }
}

module.exports = new UserController();
