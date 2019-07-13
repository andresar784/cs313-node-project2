const argv = require('yargs').argv;
var express = require ('express');
var app = express();
require('dotenv').config();
const request = require('request');
const bodyParser = require('body-parser');
//const { Pool } = require("pg");
//const connectionString = process.env.DATABASE_URL;

//const pool = new Pool({connectionString: connectionString});

const PORT = process.env.PORT || 5000

let apiKey = '3ba4507141ac346f14e337a176d7c346';
let city ='portland'; 
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;



app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get('/index', function (req, res) {
        res.render('index');
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
        let city = req.body.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    
        request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
           let weatherText = 'In ${weather.name} we have ${weather.main.temp} the pressure is ${weather.main.pressure}'
            res.render('index', {weather: weatherText, error: null});
        }
        }
        });
})
   


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))