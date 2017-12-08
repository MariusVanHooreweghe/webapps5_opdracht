let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
	username: { type: String, lowercase: true, 
        unique: true },
    hash: String,
    salt: String,
    promiseBundle: {type: mongoose.Schema.Types.ObjectId, ref: 'PromiseBundle'}
});

UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(32).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
}
UserSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};
UserSchema.methods.generateJWT = function () {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 120);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        expirationDate: parseInt(expirationDate.getTime() / 1000),
    }, process.env.PROMISE_BACKEND_SECRET);
}
mongoose.model('User', UserSchema);
