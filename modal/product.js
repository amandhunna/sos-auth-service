const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const variant = new Schema({
    type: { type: String, required },
    price: { type: Number, default: 0 }
}, { _id: false });

const productSchema = new Schema({
    productName: { type: String, required },
    deleted: { type: Boolean, default: false },
    imgUrl: { type: String },

    shopId: { type: String, required },
    variants: { type: [variant], required },

    description: { type: String, },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
