/**
* Created with YouKneeFayed-API.
* User: bluechiptony
* Date: 2015-07-27
* Time: 01:02 PM
* To change this template use Tools | Templates.
*/

//assign required modules
var request = require('request');
var restify = require('restify');
var csprng = require('csprng');
var sha1 = require('sha1');



//custom modules for application objects
var users = require('./app_modules/users.js');



var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.authorizationParser());
server.use(restify.queryParser());


//listen on port. 8080 for start can be changed
server.listen(8080, function(){
    //console message
    console.log('Server On');
    
    //get routes
    server.get('/', function(){
       console.log('In basic endpoint'); 
    });
    
    server.get('/users', users.getUsers);
    
});