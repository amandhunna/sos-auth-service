const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const oderSchema = new Schema({
    deliveryAddress: { type: String, required },
    deliveryType: { type: String, default: 'pickup' },
    expectedDeliveryTime: { type: String, required },
    deliveredTime: { type: String, required }, //time
    orderFrom: { type: String, required },// id
    orderItems: { type: Array, required, default: [] },
    orderTo: { type: String, required },  // id
    parentId: { type: String },
    rejectReason: { type: String },
    status: { type: String, required },
    rate: { type: Number },
    note: { type: String }
});

const Order = mongoose.model('orders', oderSchema);

module.exports = Order;
