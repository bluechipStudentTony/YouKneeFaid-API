/**
* Created with YouKneeFayed-API.
* User: bluechiptony
* Date: 2015-07-27
* Time: 03:06 PM
* To change this template use Tools | Templates.
*/


var request = require('request');
var csprng = require('csprng');
var sha1 = require('sha1');


//get multiple events
exports.getEvents = function(req, res, next){
    res.send("Return multiple events");
    res.end();
}


//get single event
exports.getEvent = function(req, res, next){
    res.send("Return single events");
    
}
