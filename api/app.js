let app = require('express')();
let client = require('mongodb').MongoClient();
const fs = require('fs');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://MrMoelZ:wurzel@localhost:5432/asd');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/test', (req, res) => {

    console.log('in get');

    sequelize.query("INSERT INTO test VALUES(123,'heiner');");

    sequelize.query('SELECT * FROM test').then(res => {
        console.log('sql',res[1].rows);
    })

    fs.readFile("C:\\test\\test.txt", 'utf-8', (err, data) => {
        console.log('readfile error',err);
        console.log("readfile", data);
    });
    res.json({yo: 'yo'});
})

app.listen(3000, () => {
    console.log('listening on 3000');
})