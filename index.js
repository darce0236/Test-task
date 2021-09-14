require('dotenv').config();

var express = require('express');
var router = require('./routes');

const Port = process.env.PORT;

var app = express();

app.use(express.json());
app.use('/', router);

app.listen(Port, process.env.HOST);
