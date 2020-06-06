const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    type: randomString(),
    firstName: randomString(),
    lastName: randomString(),
    storeId: randomString(),
    imgUrl: randomString(),
    address: randomString(),
    number: randomString(),
}
];

module.exports = seed;
