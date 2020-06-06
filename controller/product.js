const baseHelper = require('../util/helper');
const logger = require('../util/logger');
const productService = require('../service/order');

class ProductController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = req.body;
            const response = await productService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }

    }
}

module.exports = new ProductController();
