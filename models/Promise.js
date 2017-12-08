var mongoose = require('mongoose');

var PromiseSchema = new mongoose.Schema({
    name: String,
    description: String,
    promisees: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Promisee'}]
});
PromiseSchema.pre('remove', function(next){
    this.model('Promisee').remove({ _id: {$in: this.promisees}}, next);
});
mongoose.model('Promise', PromiseSchema);