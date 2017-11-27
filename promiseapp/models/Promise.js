var mongoose = require('mongoose');

var PromiseSchema = new mongoose.Schema({
    promiseID: Number, 
    name: String,
    description: String,
    userIDs: [Number]
});
mongoose.model('Promise', PromiseSchema);