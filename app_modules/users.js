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

var db_url = 'https://tonyegwu.iriscouch.com/uni_people/';

/* user model
    var user = {
                id: result_obj._id,
                firstname: result_obj.firstname,
                lastname: result_obj.lastname,
                email: result_obj.email,
                password: result_obj.password,
                uni: result_obj.university,
                friends: []
            }
*/


//get all users. 
//Function might turn out to be fairly useless********
exports.getUsers = function(req, res, next){
    
    request.get(db_url+'_all_docs', function(err, response, body){
        if(err){
            //handle errors
        }else{
            
            //if no errors respond to request
            
            var resids = JSON.parse(body);
            res.send(resids);
            res.end();
        }
    });
};




exports.getUserWith = function(req, res, next){
    //request user id from request params
    var static_user_id = req.params.userid;
    
    //request particular user
    request.get(db_url+static_user_id, function(err, response, body){
        if(err){
            //handle errors
        }else{
            //if no errors respond to request
            //create user object with resultant response from database request
            var result_obj = JSON.parse(body);
            var user = {
                id: result_obj._id,
                firstname: result_obj.firstname,
                lastname: result_obj.lastname,
                email: result_obj.email,
                password: result_obj.password,
                uni: result_obj.university
            }
            //send user to response
            res.send(user);
            res.end();
        }
    });
}


//get single user
exports.getSpecUser = function(req, res, next){
    var static_user_id = 'b5b1db8f1909ab2410c4b06c57000382';
    
    //request particular user
    request.get(db_url+static_user_id, function(err, response, body){
        if(err){
            //handle errors
        }else{
            //if no errors respond to request
            //create user object with resultant response from database request
            var result_obj = JSON.parse(body);
            var user = {
                id: result_obj._id,
                firstname: result_obj.firstname,
                lastname: result_obj.lastname,
                email: result_obj.email,
                password: result_obj.password,
                uni: result_obj.university
            }
            //send user to response
            res.send(user);
            res.end();
        }
    });
    
}