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

var db_url = 'https://tonyegwu.iriscouch.com/uni_events/';

/* events model
    var event = {
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        picture: url
        
    }
*/


//get multiple events
exports.getEvents = function(req, res, next){
    res.send("Return multiple events");
    res.end();
}


//get single event
exports.getEvent = function(req, res, next){
    var event_id = req.params.eventid;
    
    
    //request particular user
    request.get(db_url+event_id, function(err, response, body){
        if(err){
            //handle errors
        }else{
            //if no errors respond to request
            //create event object with resultant response from database request
            var result_obj = JSON.parse(body);
            var event = {
                //event properties
            }
            //send user to response
            res.send(event);
            res.end();
        }
    });
    
}


//put event 
exports.putEvent = function(req, res, next){
    var event_id = req.params.event_id;
    
    request.get(db_url+event_id, function(err, response, body){
        if(err){
            
        }else{
            //var res_user = JSON.parse(body);
            //check for response status to check if document is available
            if(response.statusCode == 200){
               
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


exports.deleteEvent = function(req, res, next){
    var event_id = req.params.event_id;
    
    request.get(db_url+event_id, function(err, response, body){
        if(err){
        
        }else{
            if(response.statusCode == 200){
                //if document exists
                request.del(db_url+event_id, function(err, response, body){
                    var response_message = {
                        type: "Success",
                        message: "Event has been deleted"
                    };
                    res.send(response_message);
                    res.end();
                    
                });
            }else if(response.statusCode == 404){
                var response_message = {
                    type: "failure",
                    message: "Event does not exist"
                };
                
                res.send(response_message);
                res.end();
            }
        }
    });
}