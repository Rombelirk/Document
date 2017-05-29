var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));

app.post('/', function (req, res) {

    setTimeout(function () {
        res.send(req.body);
    }, 1000);


});

app.listen(3000);
console.log('Server is running on port 3000');