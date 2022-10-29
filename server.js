const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser")
const mysql =require("mysql2")

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyparser.json)


//DataBase Connection

    const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        charset: "utf8",
        port:3306,
});
//check database connexion
db.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log("Database Connected");
})

//Create database
db.query("CREATE DATABASE IF NOT EXISTS oep", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Database Created");
})

//Create tables
db.query("CREATE TABLE IF NOT EXISTS oep.client (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255) NOT NULL,lastname VARCHAR(255) NOT NULL,adresse VARCHAR(255) NOT NULL, zipcode VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL , email VARCHAR(255) NOT NULL, phonenumber INT(255) NOT NULL    )", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Table Created");
})

app.listen(3000,()=>{
    console.log('server running')
});