const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);
require('dotenv').config();

const apiKey = process.env.WHEATHER_URL;

const PORT = process.env.PORT || 5000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

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
        let weatherText = `In ${weather.name} the temperature is ${weather.main.temp}°, the humidity is ${weather.main.humidity}%, the atmospheric pressure is ${weather.main.pressure} hpa. 
        The coordinates of ${weather.name} are, longitude: ${weather.coord.lon} and latitude: ${weather.coord.lat}, to show a map, please copy and paste longitude and
        latitude and get the map of the city!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})




app.listen(PORT, () => console.log(`Listening on ${ PORT }`))