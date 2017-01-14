'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
  //var speech = req.body.name;
  var result = JSON.parse(req.body.parameters)
    return res.json({
        speech: result.echoText,
        displayText: result.echoText,
        source: 'webhook-sample'
    });


});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server listening");
});
