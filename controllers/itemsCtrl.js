var Items = require('../model/items');
var Zips = require('../model/zips');
var PeopleItem = require('../model/peopleitems');
//get items by the parameters
module.exports.getItems = function(req, res, next){   
    Items.findOne(req.query, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            res.send(data);
        }
    });
};

module.exports.getItemsByPeople = function(req, res, next){
    Items.find({}

    );
}
//add item to item collection by people's email
//when you add the data, you should follow the data style
module.exports.addItem = function (req, res) {
    var itemid;
    if(req.body.id){
        itemid = req.body.id;
    }
    if(req.params.id){
        itemid = req.params.id;
    }
    if(itemid){
        req.body.id = id;
    }
    if(!req.body.createdAt){
        req.body.createdAt = new Date();
    }
    req.body.updateAt=new Date();
    console.log(req.body);
    console.log(req.body.city);
           
    Zips.findOne({state: req.body.state, city:req.body.city}).select('loc')
    .then(function (data) {
        console.log("this is data");
        console.log(data);
            req.body.coords={};
            req.body.coords.coordinates = data.loc;
            Items.insertMany(req.body, function (err, post, next) {
                if (err) { return next(err); }
                console.log(post);
                res.json(post);
            });
        }).catch(function (err) { 
            console.log(err);
            return err; });
    
    
    
       /* Items.insertMany(req.body, function (err, post, next) {
            if (err) { return next(err); }
            console.log(post);
            res.json(post);
        });    */
};
//delete item by the query
module.exports.removeItem = function(req, res){
    //delete item by the query, so we could set the query to anyting we want to delete
    for(var i in req.query){
        console.log(i);
        console.log(req.query[i]);
    }        
    Items.remove(req.query, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            //delete people and item relation
            PeopleItem.remove({itemid:req.query.itemid}, function(err, data){
                if(err){
                    return console.error(err);
                }
                else{
                    res.send("delete item success");
                }
            });
        }
    }); 
};

module.exports.getItems = function(req, res, next){
    Items.find(req.query, function(err, data){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
}

module.exports.getItemsNearMe = function(req, res, next){
    navigator.geolocation.getCurrentPosition(
		position => {
			let location = [position.coords.longitude, position.coords.latitude]
			Items.find({location:{$near:location}}).toArray(function(err, docs){
                if(err){
                    throw err;
                }
                res.send(docs);
            });
		}
	);
}
