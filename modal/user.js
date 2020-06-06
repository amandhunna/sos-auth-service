const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const userSchema = new Schema({
    type: { type: String, required },
    firstName: { type: String, required }, // id
    lastName: { type: String, required },
    storeId: { type: Boolean, required },
    imgUrl: { type: String, required },
    address: { type: String, required },
    number: { type: String, required }
})

const User = mongoose.model('User', userSchema);

module.exports = User;