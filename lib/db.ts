const mysql = require('mysql');
const { dbConfig } = require('./config');

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
