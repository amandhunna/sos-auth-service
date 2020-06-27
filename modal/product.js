const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const variant = new Schema({
    name: { type: String, required },
    price: { type: Number, default: 0 }
}, { _id: false });

const productSchema = new Schema({

    deleted: { type: Boolean, default: false },
    imgUrl: { type: String },

    shopId: { type: String, required },
    productId: { type: String, required },
    variants: { type: [variant], required },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;