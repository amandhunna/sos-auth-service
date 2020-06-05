const baseHelper = require('../util/helper');
const Order = require('../modal/order');
const logger = require('../util/logger');

class OrderService {
    async create(data) {
        try {
            console.log("-----", data)
            const insertObj = new Order(data);
            const response = await insertObj.save();
            logger.info(`Order added: ${response._id}`);
            return response._id;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }

    async update(reqData) {
        try {
            const { } = reqData;
            const response = await Order.updateOne();
            return baseHelper.success(response);
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }


    async get(data = {}) {
        try {
            const projection = {
                _id: 0, // removing _id from response
            };
            const response = await Order.find(data, projection).lean();
            return baseHelper.success(response);
        } catch (err) {
            logger.error(err);
            return baseHelper.error(err.message);
        }
    }

    async delete(data) {
        try {
            const { } = data;
            await Order.deleteOne({ sellerId, type });
            return baseHelper.success(true);
        } catch (err) {
            logger.error(err);
            return baseHelper.error(err.message);
        }
    }
}

module.exports = new OrderService();
