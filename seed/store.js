const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    storeType: randomString(),
    name: randomString(),
    address: randomString(),
    storeId: randomString(),
    imgUrl: randomString(),
    address: randomString(),
    number: [randomString()],
}
];

module.exports = seed;
