const mysql = require('mysql2');
const db = mysql.createConnection({ // Correct the method name here
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'eco'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = db;