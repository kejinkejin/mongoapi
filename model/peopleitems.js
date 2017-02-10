var mongoose = require('mongoose');
var mongodbUri = 'mongodb://kejin:finalproject2017@ds145379.mlab.com:45379/freerecycling';
var connection = mongoose.createConnection(mongodbUri);


var mySchema = new mongoose.Schema({
    id:String,
    itemid:String
});

module.exports = connection.model('peopleitems', mySchema);