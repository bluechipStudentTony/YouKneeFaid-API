/**
* Created with YouKneeFayed-API.
* User: bluechiptony
* Date: 2015-07-27
* Time: 01:17 PM
* To change this template use Tools | Templates.
*/




var request = require('request');

var csprng = require('csprng');
var sha1 = require('sha1');





//get all users. 
//Function might turn out to be fairly useless********
exports.getUsers = function(req, res, next){
    res.send("Blahahahhahah");
    res.end();    
};



//get single user
exports.getSpecUser = function(req, res, next){
    res.send("Specific user");
    res.end();
}