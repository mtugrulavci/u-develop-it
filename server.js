const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app =express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req,res)=>{
    res.status(404).end();
})

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

db.query (`SELECT * FROM candidates`, (err,rows)=>{
    console.log(rows);
});


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});