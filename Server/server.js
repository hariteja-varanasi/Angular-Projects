const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const PORT = 7000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send("Hello From Server.");    
});

app.get('/products', function(req, res){
    axios('https://fakestoreapi.com/products')
        .then(function (response){
            let products = response.data;
            res.status(200).json({
                success: true,
                products
            });
        });
})

app.post('/enroll', function(req, res){
    console.log("Request Body is :");
    console.log(req.body);
    res.status(401).send({"message": "Data Received."});
});

app.listen(PORT, function(){
    console.log("Server running on localhost: ", PORT);
});