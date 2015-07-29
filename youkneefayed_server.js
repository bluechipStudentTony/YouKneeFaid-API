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
var posts = require('./app_modules/posts.js');
var events = require('./app_modules/events.js');




var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.authorizationParser());
server.use(restify.queryParser());

var user_url = '/user';
var post_url = 'posts';
var events_url

//listen on port. 8080 for start can be changed
server.listen(8080, function(){
    //console message
    console.log('Server On');
    
    //GET ROUTES
    //user routes
    server.get(user_url, users.getSpecUser);
    server.get(user_url, users.getUsers);
    server.get(user_url+'/:userid', users.getUserWith);
    
    //user's post routes
    server.get('allposts', posts.getAllPosts);
    server.get('specpost', posts.getPost);
   
    server.get('events', events.getEvent);
    
});