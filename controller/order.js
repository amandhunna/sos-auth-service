const baseHelper = require('../util/helper');
const logger = require('../util/logger');
const orderService = require('../service/order');

class OrderController {
    constructor() {
    }

    async get(req, res) {
        try {
            logger.info('[[[[[[]]]]]]');
        }
        catch (err) {

        }
    };

    async create(req, res) {
        try {
            const data = req.body;
            const response = await orderService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }

    }
}

module.exports = new OrderController();
