/**
* Created with YouKneeFayed-API.
* User: bluechiptony
* Date: 2015-07-27
* Time: 01:17 PM
* To change this template use Tools | Templates.
*/


var request = require('request');
var restify = require('restify');
var csprng = require('csprng');
var sha1 = require('sha1');

exports.getSpecUser = function(req, res, next){
    res.send("specific user");
    res.end();
}

exports.getUsers = function(req, res, next){
    res.send("Blahahahhahah");
    res.end();    
}

