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


//edit user details
exports.editUser = function(req, res, next){
    //get user details from request params
    var userId = req.params.userid;
    var user_firstname = req.params.firstname;
    var user_lastname = req.params.lastname;
    var user_email = req.params.email;
    var user_password = req.params.password;
    var user_uni = req.params.uni;
    
    //request for particular user
    request.get(db_url+userId, function(err, response, body){
        if(err){
            
        }else{
            //var res_user = JSON.parse(body);
            //check for response status to check if document is available
            if(response.statusCode == 200){
                console.log(userId);
                var res_user = JSON.parse(body);
                console.log(res_user);
                console.log(res_user.firstname);
                res.send(res_user);
                res.end();
                //if document exists put in db
                /*
                request.put(db_url+userId, function(err, response, body){
                    
                });*/
            }else if (response.statusCode == 404){
                //handle if document is not found
            }
        }
    });
}
    