var express = require('express');
var app = express();
var herbalAction = require('./herbalDataCtrl');
var problemAction = require('./problemDataCtrl');
var tipAction = require('./tipDataCtrl');

app.use('/', express.static('./public'));


/**
* This Route Get Client Herbals Request
* Returns all Herbals Data from DB
*/
app.get('/ws_grandma/getHerbalsData', function (req,res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(herbalAction.getData());
});


/**
* This Route Get Client Body id request,
* Returns all specific area problems FROM DB
*/
app.get('/ws_grandma/getAreaProblems/:area', function (req,res) {
	console.log('Request Body Area: ' + req.params.area);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(problemAction.getData(req.params.area));
});


/**
* This Route Get Client Herbal Name request,
* Returns specific Herbal
*/
app.get('/ws_grandma/getSpecificHerbal/:herbal_name', function (req,res) {
	console.log('Request Body Area: ' + req.params.herbal_name);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(herbalAction.getSpecificHerbal(req.params.herbal_name));
});


/**
* This Route Get Client problem name request,
* Returns all matched Herbals - Problem 
*/
app.get('/ws_grandma/getFilteredHerbal/:problem', function (req,res) {
	console.log('Incoming problem: ' + req.params.problem);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(herbalAction.getFilteredHerbal(req.params.problem));
});


/**
* This Route Get Daily Tips
* Returns one random daily tip
*/
app.get('/ws_grandma/getDailyTip', function (req,res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(tipAction.getRandomTip());
});


/**
* Set The Connection Port Environment Attribute
*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'));
console.log("Express server listening on port %s", app.get('port') + ' ..');


