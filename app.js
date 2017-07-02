const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')

// var locals = { This is for reference not for using.
// 	title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//res.render( 'index', {title: 'Hall of Fame', people: people} );

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.use(function(req, res, next){
	console.log("This is the middleware");
	next();
})

// app.use("/special/", function(req, res, next){
// 	console.log("you reached the special area.");
// })

// app.get("/", function(req, res){
// 	//res.send("You got a / ");  We can use send or render for external data
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// app.get("/news", function(req, res){
// 	res.send("You got a /news ");
// })









app.listen(3000, function(){
	console.log("listening to port 3000");
})