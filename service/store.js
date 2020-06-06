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

    async read(data) {
        const projection = { __v : 0,};
        try {
            const response = await Store.find(data, projection).lean();
            logger.info(`fetched store count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read store service: ${err.message}`);
            throw Error(err);
        }
    }


}

module.exports = new StoreService();
