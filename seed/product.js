const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    deleted: false,
    price: 45,
    orderFrom: randomString(), // id
    storeId: randomString(),
    variant: randomString(),
    imgUrl: randomString(),
}
];

module.exports = seed;
