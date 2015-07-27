/**
* Created with YouKneeFayed-API.
* User: bluechiptony
* Date: 2015-07-27
* Time: 03:05 PM
* To change this template use Tools | Templates.
*/


var request = require('request');
var csprng = require('csprng');
var sha1 = require('sha1');


//get single post
exports.getPost = function(req, res, next){
    res.send("Post Gotten");
    res.end();
}

//get multiple post
exports.getAllPosts = function(req, res, next){
    res.send("hget all posts");
    res.end();
}
