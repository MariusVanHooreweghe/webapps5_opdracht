var mongoose = require('mongoose');

var PromiseBundleSchema = new mongoose.Schema({
    promises: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Promise'}]
});

PromiseBundleSchema.pre('remove', function(next){
    this.model('User').remove({promiseBundle: this._id}, next);
});
mongoose.model('PromiseBundle', PromiseBundleSchema);