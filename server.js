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
        
        var sql = "SELECT * FROM movie";

        pool.query(sql, function(err, result) {
        // If an error occurred...
        if (err) {
        console.log("Error in query: ")
        console.log(err);
        }
        var movies_r = [];

        

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        console.log(result.rows);
});     
}