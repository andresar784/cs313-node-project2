const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

//const connectionString = process.env.DATABASE_URL;

const apiKey = '466d776634a54f08c51310cb0642c712';

/*const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDBAR3V4Bmxv4CwmkrSZaF6bDmdj0UN_aE',
  Promise: Promise
});*/

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
        let weatherText = `In ${weather.name} we have ${weather.main.temp} degrees, the presure is ${weather.main.pressure}.
        The coordinates of ${weather.name} are, longitude: ${weather.coord.lon} and latitude: ${weather.coord.lat}, to render a map, please copy and paste longitude and
        latitude and get the map of the city!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

/*app.get('/see', function(req, res){
      let place = req.body.city;
      googleMapsClient.placesAutoComplete(place, locality)
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
        
      })
      .catch((err) => {
       console.log(err);
   });
   res.render(response.json.results);
})*/


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))