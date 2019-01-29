var mysql = require('mysql');
var http = require('http');
var url = require('url');
var myParser = require("body-parser");
var express = require("express");
var app = express();
app.use(myParser.urlencoded({ extended: false }));
app.use(myParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


 
app.get("/list", function (request, response) {
      pool
        .getConnection(function (err) {
            if (err){
                console.log(err);
                throw err;

            }
            pool
                .query("SELECT * FROM gym.users", function (err, result, fields) {
                    if (err){
                        console.log(err);
                        throw err;
                    }
                    response.send(result);
                });
        });

});

app.post("/insert", function (request, response) {
    pool
    .getConnection(function (err) {
        if (err){
           
            throw err;

        }
        var sql="INSERT INTO gym.users (name,surname,mail) values('"+request.body.adi+"','"+request.body.soyadi+"','"+request.body.mail+"')";
         
        pool
            .query(sql, function (err, result, fields) {
                if (err){
                    
                    response.send("{islem:'Hatali',code:-1}");
                    throw err;
                }
                var returnn= {islem:'Basarili',
                code:0};
                response.send(returnn);
               
            });
    });
     
    
    

});
 
app.listen(8088); 