

var request = require('request');
var csprng = require('csprng');
var sha1 = require('sha1');

var db_url = 'https://tonyegwu.iriscouch.com/uni_businesses/';

exports.getEstab = function(req, res, next){
    var bus_id = req.params.bus_id;
    
    request.get(db_url+bus_id, function(err, response, body){
        //create document 
        if(response.statusCode == 200){
            var r_bus = JSON.parse(body);
            var business = {
                id: r_bus.id,
                name: r_bus.name,
                contact: [
                    /*
                    contact object
                    var contact = {
                        type: email or website or phone or address,
                        address: "add@blk.com"
                    }
                    */
                ],
                profile: r_bus.profile_url
            };  
            
            
        }else if(response.statusCode = 404){
            var response_message = {
                type: "failure",
                message: "Establishment Not found"
            };   
        }
    });
}

//get all estabs
exports.getAllEstabs = function(req, res, next){
    var bus_id = '_all_docs'
    
    request.get(db_url+bus_id, function(err, response, body){
        //create document 
        if(response.statusCode == 200){
            res.send(JSON.parse(body));
            
        }else if(response.statusCode = 404){
            var response_message = {
                type: "failure",
                message: "Establishment Not found"
            };   
        }
    });
}


//put estabs
exports.putEstabs = function(res, res, next){
    
}


//delete establishments
exports.deleteEstabs = function(res, res, next){
    var bus_id = req.params.bus_id;
    
    //request user
    request.get(db_url+bus_id, function(err, response, body){
        if(err){
            
        }else{
            
            //check for response status to check if document is available
            if(response.statusCode == 200){
                request.del(db_url+userId, function(err, respone, body){
                    if(response.statusCode == 200){
                        //send response message
                        var response_message = {
                            type: "success",
                            message: "Establisgment Successfully deleted"
                        };
                        res.send(response_message);
                        res.end();
                        
                    }else if(respone.statusCode == 404){
                        var response_message = {
                            type: "Failure", 
                            message: "Could not delete Establishment"
                        };
                        res.send(response_message);
                        res.end();
                    }
                });
            }else if (response.statusCode == 404){
                //handle if document is not found
                var response_message = {
                    type: "Failure", 
                    message: "No Establishment document found"
                };
                res.send(response_message);
                res.end();
            }
        }
    });
}