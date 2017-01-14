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
    return res.json({
        speech: req.body.result.parameters.echoText,
        displayText: "dummmmmy",
        source: 'webhook-sample'
    });


});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server listening");
});
