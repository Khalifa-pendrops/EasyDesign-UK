const mysql = require('mysql2');

//THIS LINE CREATES CONNECTION
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khalifa.easydesign_',
    database: 'easydesignuk',
});

//THIS LINE CONNECTS TO THE DB
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('Connection to MySQL database');
});

module.exports = db;
