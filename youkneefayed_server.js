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
var post_url = '/posts';
var events_url = '/events';
var anonymous_url = '/anaonymous';
var businesses_url = '/business';


//listen on port. 8080 for start can be changed
server.listen(8080, function(){
    //console message
    console.log('Server On');
    
    //GET ROUTES
    //user routes
    //server.get(user_url, users.getSpecUser);
    server.get(user_url, users.getUsers);
    server.get(user_url+'/:userid', users.getUserWith);
    server.put(user_url+'/:userid', users.editUser);
    server.del(user_url+'/:userid', users.deleteUser);
    
    
    
    
    //user's post routes
    server.get(post_url, posts.getAllPosts);
    server.get(post_url+'/:post_id', posts.getPost);
    server.get(post_url+'/:posts_by', posts.getPost);
   
    server.get(events_url, events.getEvent);
    server.get(events_url+'/:event_pos', events.getEvents);
    
});