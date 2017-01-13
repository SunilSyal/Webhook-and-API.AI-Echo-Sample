'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

restService.post('/hook', function(req, res) {
  //var speech = req.body.name;
    return res.json({
        speech: req.body,
        displayText: req.body,
        source: 'webhook-sample'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server listening");
});
