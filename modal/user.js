const crypto = require('crypto');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;
const secret = "secret";

const userSchema = new Schema({
    username: { type: String, required, trim: true },
    address: { type: String, required },
    firstName: { type: String, required }, // id
    imgUrl: { type: String, required },
    lastName: { type: String, required },
    number: { type: String, required },
    storeId: { type: String, required },
    type: { type: String, required },
    hash: { type: String, required },
    salt: { type: String, required },
})

// 1
userSchema.methods.setPassword = function (password) {
    // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex');
    /* Hashing user's salt and password with 1000 iterations, 
    64 length and sha512 digest   */
    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};

// 2
userSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};


const User = mongoose.model('users', userSchema);

module.exports = User;


/*
1.
 Method to set salt and hash the password for a user
 setPassword method first creates a salt unique for every user
 then it hashes the salt with user password and creates a hash
 this hash is stored in the database as user password

2.
 Method to check the entered password is correct or not
 valid password method checks whether the user
 password is correct or not
 It takes the user password from the request
 and salt from user database entry
 It then hashes user password and salt
 then checks if this generated hash is equal
 to user's hash in the database or not
 If the user's hash is equal to generated hash
 then the password is correct otherwise not

 */
