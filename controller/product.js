const baseHelper = require('../util/helper');
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

    async read(req, res) {
        try {
            const data = req.body;
            const response = await productService.read(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async update(req, res) {
        try {
            const data = req.body;
            const response = await productService.update(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }
}

module.exports = new ProductController();
