'user strict';

const express           = require('express');
const body_parser       = require('body-parser');
const consign           = require('consign');
const express_validator = require('express-validator');

const app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(express_validator());

consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .then('app/dao')
    .into(app);

module.exports = app;
