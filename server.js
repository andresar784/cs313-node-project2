var express = require ('express');
var app = express();
const { Pool } = require("pg")
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

 

const PORT = process.env.PORT || 5000

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/index", function(req, res) {
        console.log("Received a request for /index");
        res.render("pages/index");
});

app.get("/showmovies", function(req, res){
        console.log("in the showmovies page");
        showmovies();
        res.render("pages/showmovies");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

function showmovies(){
        
        var sql = "SELECT year, movie_name, category FROM movie";

        pool.query(sql, function(err, db_result) {
        // If an error occurred...
        if (err) {
        console.log("Error in query: ")
        console.log(err);
        }
        else{
                var results = {
                success:true,
                list:db_result.rows
        };
        }                              
        for (var i = 0; i < results.length; i++) {
                var movie = list[i];

        $("#ulMovies").append("<li>" + movie.movie_name + " " + movie.category + ":" + movie.year + "</li>");
        }
        
        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        console.log(db_result.rows);
});     
}