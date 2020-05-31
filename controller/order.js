const baseHelper = require('../util/logger');
const Order = require('../modal/order');
const logger = require('../util/logger');

class Order {
    constructor() {
        super();
    }

    async create(req, res) {
        try {
            this.validateToken(req);
            const { currentUser } = this;
            const isSystemAdmin = baseHelper.isSystemAdmin(currentUser);
            const isSeller = baseHelper.isSeller(currentUser);

            if (!(isSystemAdmin || isSeller)) {
                return baseHelper.response(res, baseHelper.error(errorHelper.invalidUser), 422);
            }
            const data = baseHelper.trimData(req.body);

            const fields = ['sellerId', 'shop', 'type'];
            this.validateRequired(data, fields);

            const response = await brandTemplateService.create(data);
            return baseHelper.response(res, response);
        } catch (err) {
            logger.error(`error in create of vendor template ${err}`);
            return baseHelper.response(res, baseHelper.error(err.message), 422);
        }
    }

    async update(req, res) {
        try {
            this.validateToken(req);
            const { currentUser } = this;
            const isSystemAdmin = baseHelper.isSystemAdmin(currentUser);
            const isSeller = baseHelper.isSeller(currentUser);

            if (!(isSystemAdmin || isSeller)) {
                return baseHelper.response(res, baseHelper.error(errorHelper.invalidUser), 422);
            }

            const data = baseHelper.trimData(req.body);
            const fields = ['sellerId', 'type'];
            this.validateRequired(data, fields);

            const response = await brandTemplateService.update(data);
            return baseHelper.response(res, response);
        } catch (err) {
            logger.error(`error in get of brand update ${err}`);
            return baseHelper.response(res, baseHelper.error(err.message), 422);
        }
    }

    async get(req, res) {
        try {
            const data = baseHelper.trimData(req.body);
            const {
                name,
                sellerId,
                shop,
                type,
            } = data;
            const isValid = name || sellerId || type
                || shop || !Object.entries(data).length;

            if (!isValid) {
                return baseHelper.response(res, baseHelper.error(errorHelper.invalidRequest, 422));
            }
            const response = await brandTemplateService.get(data);
            return baseHelper.response(res, response);
        } catch (err) {
            logger.error(`error in get of brand template ${err}`);
            return baseHelper.response(res, baseHelper.error(err.message), 422);
        }
    }
    async delete(req, res) {
        try {
            this.validateToken(req);
            const { currentUser } = this;
            const isSystemAdmin = baseHelper.isSystemAdmin(currentUser);
            const isSeller = baseHelper.isSeller(currentUser);

            if (!(isSystemAdmin || isSeller)) {
                return baseHelper.response(res, baseHelper.error(errorHelper.invalidUser), 422);
            }

            const data = baseHelper.trimData(req.body);

            const fields = ['sellerId', 'type'];
            this.validateRequired(data, fields);

            const response = await brandTemplateService.delete(data);
            return baseHelper.response(res, response);
        } catch (err) {
            logger.error(err);
            return baseHelper.response(res, baseHelper.error(err.message), 422);
        }
    }
}

module.exports = new Order();
