let app = require('express')();
let client = require('mongodb').MongoClient();
const fs = require('fs');

// var cors=require('cors');

// app.use(cors({origin:true,credentials: true}));


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

app.get('/test', (req, res) => {

    console.log('in get');

    fs.readFile("C:\\test\\test.txt", 'utf-8', (err, data) => {
        console.log('readfile error',err);
        console.log("readfile", data);
    });
    res.json({yo: 'yo'});
})

app.listen(3000, () => {
    console.log('listening on 3000');
})