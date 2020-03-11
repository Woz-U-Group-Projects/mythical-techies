const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!',
    database: 'projects'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connected to mysql database!');
    else
        console.log('Connection to mysql database failed \n Error: ' + JSON.stringify(err, undefined, 2));
});