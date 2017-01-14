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
      "resolvedQuery": "Search my calendar for events on April 23",
      "action": "my-action",
      "actionIncomplete": false,
      "parameters": {
        "date": "UUUU-04-23"
      }
    });


});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server listening");
});
