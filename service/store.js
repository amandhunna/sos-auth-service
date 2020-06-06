const baseHelper = require('../util/helper');
const Store = require('../modal/store');
const logger = require('../util/logger');

class StoreService {
    async create(data) {
        try {
            const insertObj = new Store(data);
            const response = await insertObj.save();
            logger.info(`Store added: ${response._id}`);
            return response._id;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }


}

module.exports = new StoreService();
