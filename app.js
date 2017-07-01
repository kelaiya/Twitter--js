const express = require( 'express' );
const app = express();

app.use(function(req, res, next){
	console.log("This is the middleware");
	next();
})

app.use("/special/", function(req, res, next){
	console.log("you reached the special area.");
})


app.get("/", function(req, res){
	res.send("You got a / ");
})

app.get("/news", function(req, res){
	res.send("You got a /news ");
})









app.listen(3000, function(){
	console.log("listening to port 3000");
})