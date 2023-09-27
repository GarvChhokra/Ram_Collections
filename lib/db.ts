const mysql = require('mysql2');
const dbConfig = require('config');

const connection = mysql.createConnection(dbConfig);

connection.connect((err : string) => {
    if(err){
        console.log("Database connection failed " + err)
    }
    else{
        console.log("Database connected successfully")
    }
})

module.exports = connection;