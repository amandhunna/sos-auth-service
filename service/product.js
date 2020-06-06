const baseHelper = require('../util/helper');
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


}

module.exports = new ProductService();
