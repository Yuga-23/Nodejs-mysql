const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password@23',
  database: 'user'
});

module.exports = connection;
