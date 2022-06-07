const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 7000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send("Hello From Server.");
});

app.post('/enroll', function(req, res){
    console.log("Request is : " + req.body);
    //res.send("Response from Server POST enroll method.");
});

app.listen(PORT, function(){
    console.log("Server running on localhost: ", PORT);
});