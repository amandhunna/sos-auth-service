const baseHelper = require('../util/helper');
const User = require('../modal/user');
const logger = require('../util/logger');

class UserService {
    async create(data) {
        try {
            const insertObj = new User(data);
            const response = await insertObj.save();
            logger.info(`User added: ${response._id}`);
            return response._id;
        } catch (err) {
            logger.error(`error in create user service: ${err.message}`);
            throw new Error(err.message);
        }
    }

    async read(data) {
        const projection = {
            hash: 0,
            salt: 0,
            __v: 0,

        };
        try {
            const response = await User.find(data, projection).lean();
            logger.info(`fetched user count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read user service: ${err.message}`);
            throw new Error(err);
        }
    }
    async update(data) {
        const { filter, update } = data;
        try {
            const response = await User.update(filter, update).lean();
            logger.info(`fetched user count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in update user service: ${err.message}`);
            throw new Error(err);
        }
    }

}

module.exports = new UserService();
