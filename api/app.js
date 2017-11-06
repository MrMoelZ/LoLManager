let app = require('express')();
let client = require('mongodb').MongoClient();

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('in get');
    res.json({yo: 'yo'});
})

app.listen(3000, () => {
    console.log('listening on 3000');
})