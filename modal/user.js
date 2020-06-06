const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;

const userSchema = new Schema({
    address: { type: String, required },
    firstName: { type: String, required }, // id
    imgUrl: { type: String, required },
    lastName: { type: String, required },
    number: { type: String, required },
    storeId: { type: String, required },
    type: { type: String, required },
})

const User = mongoose.model('users', userSchema);

module.exports = User;