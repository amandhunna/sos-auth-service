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
            logger.error(`error in create order service: ${err.message}`);
            throw Error(err.message);
        }
    }

    async read(data) {
        const projection = { __v : 0,};
        try {
            const response = await Order.find(data, projection).lean();
            logger.info(`fetched orders count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read order service: ${err.message}`);
            throw Error(err);
        }
    }

}

module.exports = new OrderService();
