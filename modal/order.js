function order(db) {
    console.log("--------------------------------")
    db.createCollection("Order", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["deliveryAddress", "expectedDeliveryTime", "deliveredTime", "orderFrom", "orderItems", "orderTo", "status"],
                properties: {
                    deliveryAddress: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },

                    deliveryType: {
                        bsonType: "string",
                        enum: ["pickup", "homeDelivery"],
                        description: "can only be one of the enum values and is required"
                    },
                    expectedDeliveryTime: {
                        bsonType: "string",
                        description: "expected delivery time is required"
                    },
                    deliveredTime: {
                        bsonType: "string",
                        description: "delivered time is required"
                    },
                    orderTo: {
                        bsonType: "string",
                        description: "order to is required"

                    },
                    orderFrom: {
                        bsonType: "string",
                        description: "order to is required"

                    },
                    parentId: {
                        bsonType: "string",
                    },
                    rejectReason: {
                        bsonType: "string",
                        description: "reject reason is required"

                    },
                    status: {
                        enum: ["fulfilled", "hold", "queue", "rejected"],
                        description: "status can only be one of the [fulfilled, hold, queue, rejected] values and is required"
                    },
                    rate: {
                        bsonType: "int",
                        minimum: 1,
                        maximum: 5,
                        description: "must be an integer in [ 1, 5 ] and is required"
                    },
                    note: {
                        bsonType: "string",
                    },

                }
            }
        },
        function(err, results) {
            if (err) console.log(err);
            else {
                console.log("Collection created.", results);

            }
        }
    })
};
module.exports = order;
