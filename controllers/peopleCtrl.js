var Peopleitems = require('../model/peopleitems');


//add people
module.exports.deleteItem = function (req, res, next) {
    //delete people data  by the query
    for(var i in req.query){
        console.log(i);
        console.log(req.query[i]);
    }        
    Peopleitems.insertMany(req.query, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            res.send('item inserted successfully!');
        }
    }); 
};

//delete people
module.exports.deleteItem = function (req, res, next) {
    //delete people data  by the query
    for(var i in req.query){
        console.log(i);
        console.log(req.query[i]);
    }        
    Peopleitems.remove(req.query, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            res.send('item removed!');
        }
    }); 
};

