const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'HMS',
    port: "3306"
})


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL");
  });

  console.log("App listening to port");

connection.query("SELECT * FROM HMS.doctor",function
(err,result,rows){
    if(err)throw err;
    else{
        console.log("DATA RECVD");
        console.log(result);
    }
})