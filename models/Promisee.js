let mongoose = require('mongoose');


var PromiseeSchema = new mongoose.Schema({
    name: String
});
mongoose.model('Promisee', PromiseeSchema);
