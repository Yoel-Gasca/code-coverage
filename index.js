/* 
npm install -D jasmine
npm install -D jasmine-node istanbul 
jasmine-console-reporter supertest jasmine-supertest
*/

var express = require ('express');
var bodyParser = require('body-parser');
var adder = require('./services/adder');
//var subtractor = require('./services/multiplier');
//var multiplier = require('./services/multiplier');
//var divider = require('.services/divider');
var app = express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.get('/suma', function (req, res){
    res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
});

/*app.get('/resta', function (req, res){
    res.send(handleCalculatorRequest(subtractor.subtract, req.query.numberA, req.query.numberB));
});

app.get('/multiplicacion', function (req, res) {
    res.send(handleCalculatorRequest(multiplier.multiple, req.query.numberA, req.query.numberB));
});

app.get('/division', function (req, res) {
    res.send(handleCalculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
});*/

app.listen(3000);
moodule.exports = app;

function handleCalculatorRequest(func, numberA, numberB) {
    var numberA = parseInt(numberA);
    var numberB = parseInt(numberB);
    var result = func(numberA,numberB);

    if(result){
        return result.toString();

    }

    throw "Error de calculo";
}

