const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    username: randomString(),
    password: randomString(),
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

/* postman data
{   "username": "randomString",
    "password": "randomString",
    "address": "randomString",
    "firstName": "randomString",
    "imgUrl": "randomString",
    "lastName": "randomString",
    "number": "randomString",
    "storeId": "randomString",
    "type": "randomString"
}
*/