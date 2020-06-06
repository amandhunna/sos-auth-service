const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    address: randomString(),
    firstName: randomString(),
    imgUrl: randomString(),
    lastName: randomString(),
    number: randomString(),
    storeId: randomString(),
    type: randomString(),
}
];

module.exports = seed;

/* 
{
    "address": "randomString",
    "firstName": "randomString",
    "imgUrl": "randomString",
    "lastName": "randomString",
    "number": "randomString",
    "storeId": "randomString",
    "type": "randomString"
}
*/