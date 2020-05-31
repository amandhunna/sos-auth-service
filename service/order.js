const baseHelper = require('../util/logger');
const Order = require('../modal/order');
const logger = require('../util/logger');

class Order {
    async create(data) {
        try {
            const insertObj = new Order(data);
            const response = await insertObj.save();
            logger.info(`Order added: ${response._id}`);
            return baseHelper.success(response._id);
        } catch (err) {
            logger.error(err);
            return baseHelper.error(err.message);
        }
    }

    async update(reqData) {
        try {
            const { } = reqData;
            const response = await Order.updateOne();
            return baseHelper.success(response);
        } catch (err) {
            logger.error(err);
            return baseHelper.error(err.message);
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

module.exports = new BrandTemplateService();
