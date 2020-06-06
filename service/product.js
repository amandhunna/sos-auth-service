const Product = require('../modal/product');
const logger = require('../util/logger');

class ProductService {
    async create(data) {
        try {
            const insertObj = new Product(data);
            const response = await insertObj.save();
            logger.info(`Order added: ${response._id}`);
            return response._id;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }

    async read(data) {
        const projection = { __v: 0, };
        try {
            const response = await Product.find(data, projection).lean();
            logger.info(`fetched product count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read product service: ${err.message}`);
            throw Error(err);
        }
    }
    async update(data) {
        const { filter, update } = data;
        try {
            const response = await Product.update(filter, update).lean();
            logger.info(`fetched product count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in update product service: ${err.message}`);
            throw Error(err);
        }
    }

}

module.exports = new ProductService();
