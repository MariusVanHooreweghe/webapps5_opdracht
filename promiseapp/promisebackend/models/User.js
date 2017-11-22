var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userID: Number,    
    username: String,
    promiseIDs: [Number]
});
mongoose.model('User', UserSchema);