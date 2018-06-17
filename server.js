var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'apple@123'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected');
});
