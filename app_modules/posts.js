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

var db_url = 'https://tonyegwu.iriscouch.com/uni_posts/';


/*
    var post = {
        id: post.id,
        poster: post.posterid,
        date: post.date,
        body: post.body
        //subject to change
        likers:[liker ids],
        comments: [comment objects{id, time, commentor, body}]
    }
*/


//get single post
exports.getPost = function(req, res, next){
    var post_id = req.params.postid;
    
    request.get(db_url+post_id, function(err, response, body){
        
        if(err){
            
        }else{
            //check for OK status code
            if(response.statusCode == 200){
                var res_post = JSON.parse(body);
                //new object with needed properties from couch db
                var post = {
                    id: res_post.id,
                    poster: res_post.posterid,
                    date: res_post.date,
                    body: res_post.body
                }
                
                res.send(post);
                res.end();
            }else if(response.statusCode == 404){ 
                //handle for 404 response
            }
        }
    });
}





//get multiple post
exports.getAllPosts = function(req, res, next){
    res.send("hget all posts");
    res.end();
}



//put post
exports.putPost = function(req, res, next){
    
    var gen_date = new Date().now();
    var postid = req.params.postid;
    var poster = req.params.poster;
    var date = gen_date;
    var post_body = req.params.body;
    
    request.get(db_url+postid, function(err, response, body){
        //check for document and handle appropriately
        //if documet exists replace , if non existent upload
        if(err){
        
        }else{
            //handle response by status code
            if(response.statusCode == 200){
                
                
                request.put(db_url+postid, function(err, response, body){
                    //put response
                    
                });
            }else if(response.statusCode == 404){
                request.put(db_url_postid, function(err, response, body){
                    //handle
                });
            }
        }
        
    });
}


//delete posts
exports.deletePost = function(req, res, next){
    //
    var post_id = req.params.postid;
    
    request.get(db_url+post_id, function(err, response, body){
        if(err){
        
        }else{
            if(response.statusCode == 200){
                //if document exists
                request.del(db_url+post_id, function(err, response, body){
                    var response_message = {
                        type: "Success",
                        message: "Post has been deleted"
                    };
                    res.send(response_message);
                    res.end();
                    
                });
            }else if(response.statusCode == 404){
                var response_message = {
                    type: "failure",
                    message: "document does not exist"
                };
                
                res.send(response_message);
                res.end();
            }
        }
    });
}