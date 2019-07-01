var express = require ('express');

var app = express();

const PORT = process.env.PORT || 5000

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/index", function(req, res) {
        console.log("Received a request for /index");
        res.render("pages/index");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))