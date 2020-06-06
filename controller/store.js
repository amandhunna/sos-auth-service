const baseHelper = require('../util/helper');
const storeService = require('../service/store');

class StoreController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = req.body;
            const response = await storeService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async read(req, res) {
        try {
            const data = req.body;
            const response = await storeService.read(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }

    }
}

module.exports = new StoreController();
