const baseHelper = require('../util/helper');
const Order = require('../modal/order');
const logger = require('../util/logger');

class OrderService {
    async create(data) {
        try {
            const insertObj = new Order(data);
            const response = await insertObj.save();
            logger.info(`Order added: ${response._id}`);
            return response._id;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }

}

module.exports = new OrderService();
