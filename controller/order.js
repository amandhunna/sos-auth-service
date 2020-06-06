const baseHelper = require('../util/helper');
const orderService = require('../service/order');

class OrderController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = req.body;
            const response = await orderService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async read(req, res) {
        try {
            const data = req.body;
            const response = await orderService.read(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }
}

module.exports = new OrderController();
