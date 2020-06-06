const baseHelper = require('../util/helper');

const { randomString } = baseHelper;

const seed = [{
    address: randomString(),
    imgUrl: randomString(),
    name: randomString(),
    number: [randomString()],
    storeType: randomString(),
}
];

module.exports = seed;

/*
{
   "address": "randomString",
   "imgUrl": "randomString",
   "name": "randomString",
   "number": ["randomString"],
   "storeType": "randomString"
}
*/