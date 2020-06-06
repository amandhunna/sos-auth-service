const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const storeSchema = new Schema({
    storeType: { type: String, required },
    name: { type: String, required },
    address: { type: String, required },
    imgUrl: { type: String, required },
    address: { type: String, required },
    number: { type: Array, required }
})

const Store = mongoose.model('stores', storeSchema);

module.exports = Store;
