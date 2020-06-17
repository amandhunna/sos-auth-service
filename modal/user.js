const crypto = require('crypto');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;
const secret = "secret";

const userSchema = new Schema({
    name: { type: String, required, trim: true },
    email: { type: String, required, unique: true },
    firstName: { type: String, required },
    lastName: { type: String, required },

    location: { type: String },

    verified: { type: Boolean },
    googleId: { type: String },

    isProvider: { type: String },

    number: { type: String },
    imageUrl: { type: String },
    storeId: { type: String },


    // password
    hash: { type: String },
    salt: { type: String },
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

userSchema.pre('save', true, function (next, done) {
    const self = this;

    if (self.email) {
        mongoose.models.users.findOne({
            email: self.email,

        }, (err, user) => {
            if (err) {
                done(err);
            } else if (user) {
                self.invalidate('email', 'email must be unique');
                done(new Error('required_unique_email'));
            } else {
                done();
            }
        });
    } else {
        done();
    }

    next();
});


userSchema.index({ email: 1, googleId: 1 }, { unique: true })

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
