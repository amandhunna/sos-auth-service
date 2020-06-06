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
            logger.error(err);
            throw Error(err.message);
        }
    }


}

module.exports = new UserService();
