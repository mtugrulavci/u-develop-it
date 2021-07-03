const mysql = require('mysql2');
//connect to databae
const db = mysql.createConnection(
    {
     host: "localhost",
     //your MySQL username,
     user: "root",
     //Your MySQL password, I didn't use password since I have no password!
    // password : ""; 
     database: "election"   
    },
    console.log("Connected to the election database.")

);
module.exports = db;