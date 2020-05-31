const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({
    storeType: { type: String, required },
    name: { type: String, required },
    address: { type: String, required },
    storeId: { type: Boolean, required },
    imgUrl: { type: String, required },
    address: { type: String, required },
    number: { type: Array, required }
})

const Store = mongoose.model({ 'Store': storeSchema });

module.exports = Store;