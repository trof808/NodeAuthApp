'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/db');
const logger = require('morgan');
const users = require('./routes/routes');
const docs = require('./routes/docRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(logger('dev'));

app.use('/users', users);
app.use('/docs', docs);

//error handling middleware
if(app.get('env') === 'development') {
    app.use((err, req ,res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
        console.log(err.message);
    });
}

module.exports = app;
