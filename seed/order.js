const baseHelper = require('../util/helper');

const { randomString } = baseHelper;
randomString(5);
const seed = [{
    deliveryAddress: randomString(5),
    deliveryType: randomString(5),
    expectedDeliveryTime: randomString(5),
    deliveredTime: randomString(5),
    orderFrom: randomString(5),
    orderItems: [randomString(5)],
    orderTo: randomString(5),
    parentId: randomString(5),
    rejectReason: randomString(5),
    status: randomString(5),
    rate: 5,
    note: randomString(5)
}
];

module.exports = seed;
/*
{
    "deliveryAddress": "aU1QT",
    "deliveryType": "BFbcB",
    "deliveredTime": "r5t4ey",
    "expectedDeliveryTime": "10d4r",
    "note": "PNRMh",
    "orderFrom": "o2jDW",
    "orderItems": ["N5SCy"],
    "orderTo": "keg5l",
    "parentId": "VbTwD",
    "rate": 5,
    "rejectReason": "DJJGY",
    "status": "spY86"
}

*/