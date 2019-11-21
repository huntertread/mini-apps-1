// create a database connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
})

connection.connect();
module.exports = connection;