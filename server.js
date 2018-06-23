const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    debug: true,
    database: 'demo'
});

// mysql.createPool({
//     connectionLimit : 500, //important
//     host     : 'localhost',
//     port     : 8889,
//     user     : 'root',
//     password : 'root',
//     database : 'testing_db',
//     debug    :  false,
//     charset  : "utf8mb4_general_ci",
//     supportBigNumbers: true,
//     bigNumberStrings : true,
// });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

