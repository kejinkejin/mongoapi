var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/itemsCtrl');
//you could get item by the special query
router.get('/items', itemsCtrl.getItems);
//get the item by people id
router.get('/peopleitems', itemsCtrl.getItemsByPeople);
//inset item
router.post('/', itemsCtrl.addItem);
//delete item by the query
router.get('/delete', itemsCtrl.removeItem);
// add item
router.get('/add', itemsCtrl.addItem);
//update the item information
router.post('/update', itemsCtrl.updateItem);
//get the item by location
router.get('/nearme', itemsCtrl.getItemsNearMe);

module.exports = router;