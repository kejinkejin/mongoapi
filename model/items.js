var mongoose = require('mongoose');
var mongodbUri = 'mongodb://kejin:finalproject2017@ds145379.mlab.com:45379/freerecycling';
var connection = mongoose.createConnection(mongodbUri);
var contactSchema = new mongoose.Schema({
	email: { type: String, required: true },
	phone: {type: String }}, {_id: false});

var mySchema = new mongoose.Schema({
        peopleid:{String, required:true},
        name:{type:String, required:true},
        description:String,
        details:String,
        contact:{type:contactSchema},
        category:String,
        state:{type:String, required:true},
        city:{type:String, required:true},
        coords: {type: [Numver]},
        img:String,
        createdAt:Date,
        updateAt:Date
        
});

module.exports = connection.model('items', mySchema);